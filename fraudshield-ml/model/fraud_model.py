import os
import joblib
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import logging

logger = logging.getLogger(__name__)

MODEL_PATH = os.path.join(os.path.dirname(__file__), "fraud_model.pkl")

FEATURE_NAMES = [
    "amount",
    "avg_amount",
    "transaction_count_1h",
    "is_new_location",
    "hour_of_day",
    "failed_logins_24h",
    "time_since_last_tx",
    "amount_to_avg_ratio",
    "is_high_amount",
    "tx_frequency_deviation"
]

class FraudDetectionModel:
    def __init__(self):
        self.model = None
        self.version = "1.0.0"
        self.is_trained = False
        self.load_or_train()

    def load_or_train(self):
        if os.path.exists(MODEL_PATH):
            logger.info("Loading existing model...")
            self.model = joblib.load(MODEL_PATH)
            self.is_trained = True
        else:
            logger.info("No model found. Training new model...")
            self.train()

    def generate_synthetic_data(self, n_samples=10000):
        np.random.seed(42)
        n_fraud = int(n_samples * 0.20)
        n_normal = n_samples - n_fraud

        # Normal data
        amount_normal = np.random.uniform(500, 50000, n_normal)
        avg_amount_normal = amount_normal * np.random.uniform(0.8, 1.2, n_normal)
        tx_count_1h_normal = np.random.randint(0, 3, n_normal)
        new_loc_normal = np.random.choice([0, 1], p=[0.95, 0.05], size=n_normal)
        hour_normal = np.random.randint(0, 24, n_normal)
        failed_logins_normal = np.random.randint(0, 2, n_normal)
        time_since_tx_normal = np.random.uniform(60, 1440, n_normal)
        ratio_normal = amount_normal / (avg_amount_normal + 1e-5)
        high_amount_normal = (amount_normal > 100000).astype(int)
        freq_dev_normal = np.random.uniform(0, 1, n_normal)

        X_normal = pd.DataFrame({
            "amount": amount_normal,
            "avg_amount": avg_amount_normal,
            "transaction_count_1h": tx_count_1h_normal,
            "is_new_location": new_loc_normal,
            "hour_of_day": hour_normal,
            "failed_logins_24h": failed_logins_normal,
            "time_since_last_tx": time_since_tx_normal,
            "amount_to_avg_ratio": ratio_normal,
            "is_high_amount": high_amount_normal,
            "tx_frequency_deviation": freq_dev_normal
        })
        y_normal = np.zeros(n_normal)

        # Fraud data
        amount_fraud = np.random.uniform(20000, 500000, n_fraud)
        avg_amount_fraud = amount_fraud * np.random.uniform(0.1, 0.5, n_fraud)
        tx_count_1h_fraud = np.random.randint(3, 10, n_fraud)
        new_loc_fraud = np.random.choice([0, 1], p=[0.2, 0.8], size=n_fraud)
        hour_fraud = np.random.randint(0, 24, n_fraud)
        failed_logins_fraud = np.random.randint(2, 10, n_fraud)
        time_since_tx_fraud = np.random.uniform(0, 30, n_fraud)
        ratio_fraud = amount_fraud / (avg_amount_fraud + 1e-5)
        high_amount_fraud = (amount_fraud > 100000).astype(int)
        freq_dev_fraud = np.random.uniform(2, 10, n_fraud)

        X_fraud = pd.DataFrame({
            "amount": amount_fraud,
            "avg_amount": avg_amount_fraud,
            "transaction_count_1h": tx_count_1h_fraud,
            "is_new_location": new_loc_fraud,
            "hour_of_day": hour_fraud,
            "failed_logins_24h": failed_logins_fraud,
            "time_since_last_tx": time_since_tx_fraud,
            "amount_to_avg_ratio": ratio_fraud,
            "is_high_amount": high_amount_fraud,
            "tx_frequency_deviation": freq_dev_fraud
        })
        y_fraud = np.ones(n_fraud)

        X = pd.concat([X_normal, X_fraud], ignore_index=True)
        y = np.concatenate([y_normal, y_fraud])

        return X, y

    def train(self):
        logger.info("Generating synthetic data...")
        X, y = self.generate_synthetic_data(10000)
        
        logger.info("Training Random Forest...")
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.model.fit(X, y)
        
        preds = self.model.predict(X)
        logger.info(f"Training Accuracy: {accuracy_score(y, preds)}")
        
        logger.info("Saving model...")
        joblib.dump(self.model, MODEL_PATH)
        self.is_trained = True

    def predict(self, features: dict):
        if not self.is_trained or self.model is None:
            raise ValueError("Model is not trained yet.")
        
        df = pd.DataFrame([features])
        df = df[FEATURE_NAMES]  # ensure correct order
        
        prob = self.model.predict_proba(df)[0][1]
        
        return prob

    def get_feature_importance(self):
        if not self.is_trained or self.model is None:
            return {}
        importance = self.model.feature_importances_
        return {name: float(imp) for name, imp in zip(FEATURE_NAMES, importance)}
