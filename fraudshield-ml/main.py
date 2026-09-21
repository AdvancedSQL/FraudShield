import logging
from typing import List, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from contextlib import asynccontextmanager
from model.fraud_model import FraudDetectionModel, FEATURE_NAMES

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

fraud_model = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global fraud_model
    logger.info("Starting up FraudShield ML service...")
    fraud_model = FraudDetectionModel()
    if fraud_model.is_trained:
        logger.info("Fraud model successfully loaded/trained.")
    else:
        logger.error("Failed to load/train fraud model.")
    yield
    logger.info("Shutting down FraudShield ML service...")

app = FastAPI(title="FraudShield ML Service", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TransactionFeatures(BaseModel):
    amount: float
    avg_amount: float
    transaction_count_1h: int
    is_new_location: bool
    hour_of_day: int
    failed_logins_24h: int
    time_since_last_tx: float
    amount_to_avg_ratio: float
    is_high_amount: bool
    tx_frequency_deviation: float

class FraudPredictionResponse(BaseModel):
    fraud_probability: float
    ml_risk_score: int
    prediction: str
    feature_importance: Dict[str, float]
    model_version: str

def get_prediction_class(score: int) -> str:
    if score < 30:
        return "LOW_RISK"
    elif score <= 60:
        return "MEDIUM_RISK"
    elif score <= 85:
        return "HIGH_RISK"
    else:
        return "CRITICAL"

def process_prediction(features: TransactionFeatures) -> FraudPredictionResponse:
    if not fraud_model or not fraud_model.is_trained:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    feature_dict = features.model_dump()
    feature_dict["is_new_location"] = int(feature_dict["is_new_location"])
    feature_dict["is_high_amount"] = int(feature_dict["is_high_amount"])
    
    prob = fraud_model.predict(feature_dict)
    risk_score = int(prob * 100)
    
    return FraudPredictionResponse(
        fraud_probability=float(prob),
        ml_risk_score=risk_score,
        prediction=get_prediction_class(risk_score),
        feature_importance=fraud_model.get_feature_importance(),
        model_version=fraud_model.version
    )

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model_loaded": fraud_model is not None and fraud_model.is_trained
    }

@app.post("/predict", response_model=FraudPredictionResponse)
def predict(features: TransactionFeatures):
    try:
        logger.info(f"Predicting for transaction amount: {features.amount}")
        return process_prediction(features)
    except Exception as e:
        logger.error(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/batch", response_model=List[FraudPredictionResponse])
def predict_batch(features_list: List[TransactionFeatures]):
    try:
        logger.info(f"Processing batch of {len(features_list)} transactions")
        return [process_prediction(f) for f in features_list]
    except Exception as e:
        logger.error(f"Error during batch prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/model/info")
def model_info():
    if not fraud_model or not fraud_model.is_trained:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    return {
        "version": fraud_model.version,
        "features": FEATURE_NAMES,
        "is_trained": fraud_model.is_trained,
        "model_type": "RandomForestClassifier(n_estimators=100)"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
