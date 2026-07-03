import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import AssessmentHeader from "../components/prediction/AssessmentHeader";
import PatientInformationCard from "../components/prediction/PatientInformationCard";
import ClinicalInformationCard from "../components/prediction/ClinicalInformationCard";
import LifestyleInformationCard from "../components/prediction/LifestyleInformationCard";
import PredictionActions from "../components/prediction/PredictionActions";
import { predictDiabetes } from "../services/predictionService";

/**
 * PredictionPage
 *
 * Composes the assessment flow: header, then the three information
 * cards, then the action bar. This page owns a single central
 * `formData` state, a generic `handleChange` updater (passed down to
 * each controlled card), an `errors` state populated by `validateForm`
 * (only on submit — never while typing), and an `isLoading` state used
 * while the (placeholder) prediction service call is in flight. Run AI
 * Prediction currently calls `predictDiabetes(formData)` and logs the
 * response — it does not navigate anywhere yet and there is no real
 * backend behind it.
 *
 * NOTE: `errors`, `isLoading`, and `runButtonLabel` are passed down to
 * the cards/action bar so they can eventually render field-level error
 * messages, disable buttons, and swap the label while loading — but
 * none of those child components were modified this sprint (out of
 * scope), so they currently ignore these props.
 */

const INITIAL_FORM_DATA = {
  age: "",
  gender: "",
  pregnancies: "",
  height: "",
  weight: "",
  bmi: "",
  glucose: "",
  bloodPressure: "",
  insulin: "",
  skinThickness: "",
  diabetesPedigreeFunction: "",
  smoking: "",
  alcohol: "",
  physicalActivity: "",
  familyHistory: "",
  dietQuality: "",
  exerciseFrequency: "",
  sleepDuration: "",
};

// Fields that must be strictly greater than 0.
const POSITIVE_FIELDS = [
  { key: "age", label: "Age" },
  { key: "height", label: "Height" },
  { key: "weight", label: "Weight" },
  { key: "bmi", label: "BMI" },
  { key: "glucose", label: "Glucose" },
  { key: "bloodPressure", label: "Blood Pressure" },
];

// Fields that must be present and zero or greater.
const NON_NEGATIVE_FIELDS = [
  { key: "insulin", label: "Insulin" },
  { key: "skinThickness", label: "Skin Thickness" },
  { key: "diabetesPedigreeFunction", label: "Diabetes Pedigree Function" },
];

// Fields that just need a value selected.
const REQUIRED_SELECT_FIELDS = [
  { key: "gender", label: "Gender" },
  { key: "smoking", label: "Smoking" },
  { key: "familyHistory", label: "Family History" },
  { key: "physicalActivity", label: "Physical Activity" },
];

function PredictionPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    for (const field of POSITIVE_FIELDS) {
      const value = Number(formData[field.key]);
      if (formData[field.key] === "" || Number.isNaN(value) || value <= 0) {
        newErrors[field.key] = `${field.label} must be greater than 0.`;
      }
    }

    for (const field of NON_NEGATIVE_FIELDS) {
      const value = Number(formData[field.key]);
      if (formData[field.key] === "" || Number.isNaN(value) || value < 0) {
        newErrors[field.key] = `${field.label} must be 0 or greater.`;
      }
    }

    for (const field of REQUIRED_SELECT_FIELDS) {
      if (!formData[field.key]) {
        newErrors[field.key] = `Please select ${field.label}.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRunPrediction = async () => {
    if (isLoading) return;

    const isValid = validateForm();
    if (!isValid) return;

    setIsLoading(true);
    try {
      const response = await predictDiabetes(formData);

      alert(JSON.stringify(response, null, 2));

      console.log("Prediction Response:", response);

      navigate("/prediction/result", {
        state: response,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AssessmentHeader
        title="Diabetes Risk Assessment"
        subtitle="Complete the assessment below to receive an educational AI-powered diabetes risk prediction."
      />

      <Container>
        <div className="py-10 sm:py-12 lg:py-16 space-y-8">
          <PatientInformationCard
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <ClinicalInformationCard
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <LifestyleInformationCard
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <PredictionActions
            onRunPrediction={handleRunPrediction}
            isLoading={isLoading}
            runButtonLabel={isLoading ? "Analyzing..." : "Run AI Prediction"}
          />
        </div>
      </Container>
    </div>
  );
}

export default PredictionPage;
