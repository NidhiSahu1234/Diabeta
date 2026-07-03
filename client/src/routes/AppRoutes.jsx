//Landing Page
//   │
//   ├── Login
//   ├── Register
//   ├── Dashboard
//   ├── Prediction
//   ├── History
//  └── Profile

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import PredictionPage from "../pages/PredictionPage";
import PredictionResult from "../pages/PredictionResult";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (We'll secure these later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/prediction/result" element={<PredictionResult />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
