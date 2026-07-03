import Container from "../common/Container";
import { HeartPulse, ChartSpline, BrainCircuit, Clock3 } from "lucide-react";

/**
 * Features
 *
 * Section immediately below the Hero that explains the four core
 * capabilities of DiaBeta AI. Card data is stored as an array and
 * rendered with map() so new features can be added without touching
 * the JSX structure.
 */

const FEATURES = [
  {
    icon: HeartPulse,
    title: "Diabetes Risk Assessment",
    description:
      "Predict diabetes risk using a machine learning model trained on clinical health indicators.",
  },
  {
    icon: ChartSpline,
    title: "Interactive Health Dashboard",
    description:
      "Track health trends and visualize prediction history through an interactive dashboard.",
  },
  {
    icon: BrainCircuit,
    title: "Personalized AI Insights",
    description:
      "Receive intelligent health recommendations generated from your assessment results.",
  },
  {
    icon: Clock3,
    title: "Health Assessment History",
    description:
      "Securely revisit previous assessments and monitor your long-term health progress.",
  },
];

function Features() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Powerful Features for Preventive Healthcare
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to assess diabetes risk, understand your health,
            and make informed lifestyle decisions.
          </p>
        </div>
        <ul className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <li
                key={feature.title}
                className="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-100"
              >
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100"
                  aria-hidden="true"
                >
                  <Icon size={28} className="text-teal-600" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center text-sm font-semibold text-teal-600 transition-colors group-hover:text-teal-700">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default Features;
