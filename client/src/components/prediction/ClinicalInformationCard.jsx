import Card from "../common/Card";

/**
 * ClinicalInformationCard
 *
 * Reusable card that lays out the clinical measurement fields (BMI,
 * Glucose, Blood Pressure, Insulin, Skin Thickness, Diabetes Pedigree
 * Function). Fields are stored as data and rendered with map() so new
 * fields can be added without touching the markup.
 *
 * This component is controlled by its parent: it receives `formData`
 * (an object keyed by field id) and a single generic `handleChange`
 * function, and wires every input's value and onChange to them. It
 * performs no validation and has no submit action itself.
 *
 * Props:
 * formData     -> object keyed by field id, holding each field's value
 * handleChange -> generic (event) => void change handler
 */

const FIELDS = [
  {
    id: "bmi",
    label: "BMI",
    type: "number",
    placeholder: "e.g. 24.5",
  },
  {
    id: "glucose",
    label: "Glucose",
    type: "number",
    placeholder: "e.g. 100 mg/dL",
  },
  {
    id: "bloodPressure",
    label: "Blood Pressure",
    type: "number",
    placeholder: "e.g. 80 mmHg",
  },
  {
    id: "insulin",
    label: "Insulin",
    type: "number",
    placeholder: "e.g. 85 mu U/mL",
  },
  {
    id: "skinThickness",
    label: "Skin Thickness",
    type: "number",
    placeholder: "e.g. 20 mm",
  },
  {
    id: "diabetesPedigreeFunction",
    label: "Diabetes Pedigree Function",
    type: "number",
    placeholder: "e.g. 0.35",
  },
];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200";

function ClinicalInformationCard({ formData, handleChange }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-slate-900">
        Clinical Measurements
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
        {FIELDS.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              step="any"
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              className={FIELD_CLASSES}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ClinicalInformationCard;
