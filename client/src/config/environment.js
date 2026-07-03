// src/config/environment.js

export const APP_NAME = "DiaBeta AI";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://diabeta-ai-backend.onrender.com";

export const ML_SERVICE_URL =
  import.meta.env.VITE_ML_SERVICE_URL ||
  "https://diabeta-ai-backend.onrender.com";
