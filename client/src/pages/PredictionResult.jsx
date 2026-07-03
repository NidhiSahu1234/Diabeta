import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

/**
 * PredictionResult
 *
 * Result page shown after a (placeholder) assessment run. Values are
 * read from router state (passed via navigate("/prediction/result",
 * { state: response })) with safe optional chaining and a fallback to
 * placeholder defaults if state is missing (e.g. on a direct page
 * load/refresh). Risk Factor Breakdown remains static placeholder
 * content — it was not part of this sprint's data wiring. There is no
 * backend call, no API integration, and no prediction logic in this
 * file.
 */

const DEFAULT_PREDICTION = "Low Risk";
const DEFAULT_CONFIDENCE = 94;
const DEFAULT_PROBABILITY = 18;

const DEFAULT_RECOMMENDATIONS = [
  "Walk 30 minutes daily",
  "Choose whole grains",
  "Improve sleep quality",
  "Drink more water",
  "Schedule regular health check-ups",
];

const RISK_FACTORS = [
  {
    id: "glucose",
    title: "Glucose",
    influence: "High",
    description: "Contributed the most to this result.",
  },
  {
    id: "bmi",
    title: "BMI",
    influence: "Moderate",
    description: "Moderately increased overall risk.",
  },
  {
    id: "age",
    title: "Age",
    influence: "Low",
    description: "Had a minor effect on this result.",
  },
  {
    id: "familyHistory",
    title: "Family History",
    influence: "Moderate",
    description: "Considered as part of the assessment.",
  },
];

const INFLUENCE_BADGE_CLASSES = {
  High: "bg-teal-600 text-white",
  Moderate: "bg-teal-100 text-teal-700",
  Low: "bg-slate-100 text-slate-600",
};

function PredictionResult({
  onRunNewAssessment = () => {},
  onDownloadReport = () => {},
  onSaveAssessment = () => {},
}) {
  const location = useLocation();
  const state = location?.state;

  const prediction = state?.prediction ?? DEFAULT_PREDICTION;
  const confidence = state?.confidence ?? DEFAULT_CONFIDENCE;
  const probability = state?.probability ?? DEFAULT_PROBABILITY;
  const recommendations = state?.recommendations ?? DEFAULT_RECOMMENDATIONS;

  const riskAngle = (probability / 100) * 360;

  // Animate the confidence bar in on mount rather than snapping to
  // its final width immediately.
  const [confidenceWidth, setConfidenceWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setConfidenceWidth(confidence), 150);
    return () => clearTimeout(timer);
  }, [confidence]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-b from-teal-50/60 to-slate-50 py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1 — Prediction Complete */}
            <div className="text-center">
              <div
                className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-teal-100"
                aria-hidden="true"
              >
                <span className="text-4xl sm:text-5xl text-teal-700">✓</span>
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Prediction Complete
              </h1>
              <p className="mt-2 text-slate-600">
                Your health assessment has been analyzed successfully.
              </p>
            </div>

            {/* Section 2 — Risk Summary */}
            <Card>
              <div className="text-center">
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Risk Summary
                </h2>

                <div className="mt-6 flex justify-center">
                  <div
                    className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full"
                    style={{
                      background: `conic-gradient(#0d9488 0deg ${riskAngle}deg, #ccfbf1 ${riskAngle}deg 360deg)`,
                    }}
                    role="img"
                    aria-label={`Risk indicator showing ${prediction} at ${probability} percent`}
                  >
                    <div className="absolute inset-3 rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {probability}%
                      </span>
                      <span className="mt-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
                        {prediction.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm text-slate-500">
                  Educational assessment only
                </p>
              </div>
            </Card>

            {/* Section 3 — Confidence Score */}
            <Card>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                Confidence Score
              </h2>

              <div className="mt-4 flex items-center gap-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                  {confidence}%
                </span>
                <div
                  className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden"
                  role="img"
                  aria-label={`Model confidence: ${confidence} percent`}
                >
                  <div
                    className="h-3 rounded-full bg-teal-500 transition-all duration-1000 ease-out"
                    style={{ width: `${confidenceWidth}%` }}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Model confidence for educational prediction.
              </p>
            </Card>

            {/* Section 4 — Risk Factor Breakdown */}
            <section aria-labelledby="risk-factors-heading">
              <h2
                id="risk-factors-heading"
                className="text-lg font-semibold text-slate-900 text-center sm:text-left"
              >
                Risk Factor Breakdown
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RISK_FACTORS.map((factor) => (
                  <Card key={factor.id}>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {factor.title}
                    </h3>
                    <span
                      className={`mt-2 inline-block rounded-full text-xs font-semibold px-3 py-1 ${
                        INFLUENCE_BADGE_CLASSES[factor.influence]
                      }`}
                    >
                      {factor.influence} influence
                    </span>
                    <p className="mt-3 text-sm text-slate-500">
                      {factor.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 5 — AI Recommendations */}
            <div className="rounded-2xl bg-teal-50/60 border border-teal-100 shadow-md p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                AI Recommendations
              </h2>
              <ul className="mt-4 space-y-3">
                {recommendations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span
                      className="text-teal-600 font-semibold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 — Educational Disclaimer */}
            <div className="flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 shadow-md p-5 sm:p-6">
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-sm font-bold"
                aria-hidden="true"
              >
                i
              </span>
              <p className="text-sm text-amber-900">
                This prediction is intended for educational purposes only and
                should not replace professional medical advice.
              </p>
            </div>

            {/* Section 7 — Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={onRunNewAssessment}
                className="w-full sm:w-auto"
              >
                Run New Assessment
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onDownloadReport}
                className="w-full sm:w-auto"
              >
                Download Report
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={onSaveAssessment}
                className="w-full sm:w-auto"
              >
                Save Assessment
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PredictionResult;
