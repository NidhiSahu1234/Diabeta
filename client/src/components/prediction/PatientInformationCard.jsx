/**
 * PatientInformationCard
 *
 * Reusable card that lays out the patient information fields (Age,
 * Gender, Pregnancies, Height, Weight). Fields are stored as data and
 * rendered with map() so new fields can be added without touching the
 * markup.
 *
 * This component is controlled by its parent: it receives `formData`
 * (an object keyed by field id) and a single generic `handleChange`
 * function, and wires every input/select's value and onChange to
 * them. It performs no validation and has no submit action itself.
 *
 * Props:
 * formData     -> object keyed by field id, holding each field's value
 * handleChange -> generic (event) => void change handler
 */

const FIELDS = [
  {
    id: "age",
    label: "Age",
    type: "number",
    placeholder: "e.g. 45",
  },
  {
    id: "gender",
    label: "Gender",
    type: "select",
    placeholder: "Select gender",
    options: ["Female", "Male", "Other"],
  },
  {
    id: "pregnancies",
    label: "Pregnancies",
    type: "number",
    placeholder: "e.g. 0",
  },
  {
    id: "height",
    label: "Height (cm)",
    type: "number",
    placeholder: "e.g. 165",
  },
  {
    id: "weight",
    label: "Weight (kg)",
    type: "number",
    placeholder: "e.g. 68",
  },
];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200";

function PatientInformationCard({ formData, handleChange }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-md p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">
        Patient Information
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

            {field.type === "select" ? (
              <select
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className={FIELD_CLASSES}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                className={FIELD_CLASSES}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientInformationCard;
