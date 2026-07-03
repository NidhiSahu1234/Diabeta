import Button from "../common/Button";
import Container from "../common/Container";

/**
 * Hero
 *
 * Primary above-the-fold section for the DiaBeta AI landing page.
 * Two-column layout on desktop (copy + CTAs on the left, a dashboard
 * illustration on the right), stacking to a single column on mobile.
 *
 * Props:
 * onStartAssessment -> handler for the primary CTA (defaults to no-op)
 * onViewDashboard   -> handler for the secondary CTA (defaults to no-op)
 */

const TRUST_BADGES = [
  "Secure by Design",
  "Machine Learning Driven",
  "Personalized Risk Analysis",
  "Results in Seconds",
];

function CheckBadgeIcon() {
  return (
    <svg
      className="h-4 w-4 text-teal-600 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DashboardIllustration() {
  return (
    <div
      className="relative rounded-3xl bg-white border border-slate-100 shadow-xl p-6 sm:p-8"
      role="img"
      aria-label="Preview of the DiaBeta AI risk dashboard, showing a risk score gauge and health metric charts"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
      </div>

      <div className="grid grid-cols-5 gap-6" aria-hidden="true">
        {/* Risk score gauge */}
        <div className="col-span-5 sm:col-span-2 flex flex-col items-center justify-center rounded-2xl bg-teal-50 p-6">
          <div
            className="relative h-28 w-28 rounded-full"
            style={{
              background:
                "conic-gradient(#0d9488 0deg 260deg, #ccfbf1 260deg 360deg)",
            }}
          >
            <div className="absolute inset-2 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-900">
                Low Risk done
              </span>
              <span className="text-xs text-slate-500">Risk score</span>
            </div>
          </div>
          <span className="mt-4 text-sm font-medium text-slate-600">
            Based on your latest health assessment
          </span>
        </div>

        {/* Metric bars */}
        <div className="col-span-5 sm:col-span-3 flex flex-col justify-center gap-4">
          {[
            { label: "Glucose trend", value: "72%" },
            { label: "Activity level", value: "58%" },
            { label: "Sleep quality", value: "84%" },
          ].map((metric) => (
            <div key={metric.label}>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                <span>{metric.label}</span>
                <span className="font-semibold text-slate-700">
                  {metric.value}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-teal-500"
                  style={{ width: metric.value }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Report line */}
        <div className="col-span-5 rounded-2xl bg-slate-50 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Personalized report ready
            </p>
            <p className="text-xs text-slate-500">
              Generated using your health metrics
            </p>
          </div>
          <span className="rounded-full bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1">
            Open
          </span>
        </div>
      </div>

      {/* Decorative accents */}
      <div
        className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-teal-100 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -top-6 -left-6 -z-10 h-24 w-24 rounded-full bg-cyan-100 blur-2xl"
        aria-hidden="true"
      />
    </div>
  );
}

function Hero({ onStartAssessment = () => {}, onViewDashboard = () => {} }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white py-16 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Know Your Diabetes Risk
              <span className="block text-teal-600">
                Before It Becomes Serious
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
              DiaBeta AI combines machine learning, health analytics, and
              personalized recommendations to help you better understand your
              diabetes risk and take preventive action before complications
              arise.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartAssessment}
                className="w-full sm:w-auto"
              >
                Start Risk Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onViewDashboard}
                className="w-full sm:w-auto"
              >
                Explore Dashboard
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "React",
                "Express",
                "Flask",
                "Machine Learning",
                "Power BI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-teal-50 border border-teal-200 px-4 py-2 text-sm font-medium text-teal-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <CheckBadgeIcon />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration column */}
          <div className="mt-4 lg:mt-0">
            <DashboardIllustration />
          </div>
        </div>
      </Container>

      <p className="mt-10 text-center text-sm text-slate-500">
        DiaBeta AI provides educational risk assessments and is not a substitute
        for professional medical advice.
      </p>
    </section>
  );
}

export default Hero;
