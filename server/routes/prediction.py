"""
routes/prediction.py

Defines the prediction Blueprint and its single route. This file
contains routing only — no business logic, no ML model loading, no
data preprocessing, and no placeholder JSON. The actual work is
delegated entirely to controllers/prediction_controller.py.
"""

from flask import Blueprint

from controllers.prediction_controller import predict

prediction_bp = Blueprint("prediction_bp", __name__)


@prediction_bp.route("/predict", methods=["POST"])
def predict_route():
    return predict()