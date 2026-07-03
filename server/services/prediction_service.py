"""
Prediction Service

Contains only business logic.

No Flask imports.
No jsonify.
No request.

This layer will eventually:
1. Validate input
2. Preprocess features
3. Load scaler
4. Load ML model
5. Generate prediction
"""

REQUIRED_FIELDS = [
    "age",
    "gender",
    "pregnancies",
    "height",
    "weight",
    "bmi",
    "glucose",
    "bloodPressure",
    "insulin",
    "skinThickness",
    "diabetesPedigreeFunction",
    "smoking",
    "alcohol",
    "physicalActivity",
    "familyHistory",
    "dietQuality",
    "exerciseFrequency",
    "sleepDuration",
]

import joblib
import os
import numpy as np

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "model", "diabetes_model.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "model", "scaler.pkl")

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

def predict_diabetes(data):
    """
    Business logic for diabetes prediction.

    Parameters
    ----------
    data : dict
        Incoming JSON data.

    Returns
    -------
    dict
        Standard API response.
    """

    missing_fields = [
        field for field in REQUIRED_FIELDS
        if field not in data or data[field] in ("", None)
    ]

    if missing_fields:
        return {
            "success": False,
            "message": "Missing required fields.",
            "missingFields": missing_fields,
        }

    # Temporary placeholder response.
    # Real ML prediction will replace this in Sprint 12.7.
        # Create feature vector in the same order used during training
    features = np.array([[
        float(data["pregnancies"]),
        float(data["glucose"]),
        float(data["bloodPressure"]),
        float(data["skinThickness"]),
        float(data["insulin"]),
        float(data["bmi"]),
        float(data["diabetesPedigreeFunction"]),
        float(data["age"]),
    ]])

    # Scale features
    scaled_features = scaler.transform(features)

    # Predict class
    prediction = model.predict(scaled_features)[0]

    # Predict probability
    probability = model.predict_proba(scaled_features)[0][1]

    if prediction == 1:
        prediction_label = "High Risk"
        recommendations = [
            "Consult a healthcare professional.",
            "Monitor blood glucose regularly.",
            "Maintain a healthy diet.",
            "Exercise at least 30 minutes daily."
        ]
    else:
        prediction_label = "Low Risk"
        recommendations = [
            "Continue a healthy lifestyle.",
            "Exercise regularly.",
            "Limit sugary foods and drinks.",
            "Schedule routine health check-ups."
        ]

    return {
        "success": True,
        "message": "Prediction generated successfully.",
        "data": {
            "prediction": prediction_label,
            "confidence": round(max(probability, 1 - probability) * 100, 2),
            "probability": round(probability * 100, 2),
            "recommendations": recommendations,
        },
    }