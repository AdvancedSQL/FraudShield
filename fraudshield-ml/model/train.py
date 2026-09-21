import logging
from model.fraud_model import FraudDetectionModel
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
import joblib
import os

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def main():
    logger.info("Initializing model...")
    # This automatically trains and saves if model.pkl doesn't exist
    fraud_model = FraudDetectionModel()
    
    logger.info("Generating data for evaluation...")
    X, y = fraud_model.generate_synthetic_data(10000)
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    logger.info("Training explicitly for standalone script...")
    fraud_model.model.fit(X_train, y_train)
    
    logger.info("Evaluating...")
    preds = fraud_model.model.predict(X_test)
    logger.info(f"Accuracy: {accuracy_score(y_test, preds)}")
    logger.info(f"\nClassification Report:\n{classification_report(y_test, preds)}")
    
    model_path = os.path.join(os.path.dirname(__file__), "fraud_model.pkl")
    joblib.dump(fraud_model.model, model_path)
    logger.info(f"Model saved to {model_path}")

if __name__ == "__main__":
    main()
