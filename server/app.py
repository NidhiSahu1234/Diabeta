
"""
app.py

DiaBeta AI backend entry point.

This sprint only initializes Flask, enables CORS, and exposes a single
health-check endpoint. No prediction logic and no ML model loading
happen here yet — the routes/, controllers/, services/, model/, and
utils/ packages are scaffolded but intentionally empty for now.
"""

from flask import Flask, jsonify
from flask_cors import CORS
from routes.prediction import prediction_bp
from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    app.register_blueprint(prediction_bp, url_prefix="/api")
    @app.route("/", methods=["GET"])
    def health_check():
        return jsonify({"status": "DiaBeta AI Backend Running"})

    return app


app = create_app()


if __name__ == "__main__":
    app.run(host=Config.HOST, port=Config.PORT, debug=Config.DEBUG)
