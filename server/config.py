"""
config.py

Basic application configuration for the DiaBeta AI backend. Values are
read from environment variables where available, with sensible local
defaults. No prediction/ML-related configuration lives here yet.
"""

import os


class Config:
    DEBUG = os.environ.get("FLASK_DEBUG", "True") == "True"
    HOST = os.environ.get("FLASK_HOST", "0.0.0.0")
    PORT = int(os.environ.get("FLASK_PORT", 5000))
