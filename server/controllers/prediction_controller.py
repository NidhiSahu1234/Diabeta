"""
controllers/prediction_controller.py

Handles the request/response cycle for the /predict route. Contains
no ML logic, no data preprocessing, and no placeholder prediction
values — all of that belongs in services/prediction_service.py. This
controller's job is limited to: reading the incoming JSON, validating
that it exists, delegating to the service layer, and returning the
result.
"""

from flask import request, jsonify

from services.prediction_service import predict_diabetes


def predict():
    data = request.get_json()

    if not data:
        return (
            jsonify(
                {
                    "success": False,
                    "message": "Request body is missing.",
                }
            ),
            400,
        )

    result = predict_diabetes(data)

    return jsonify(result)
