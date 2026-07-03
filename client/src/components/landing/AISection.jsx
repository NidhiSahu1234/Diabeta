import Button from "../common/Button";
import Container from "../common/Container";
import { BrainCircuit } from "lucide-react";

/**
 * AISection
 *
 * Landing page preview of the AI Health Assistant. Shows a sample
 * conversation to illustrate the kind of educational guidance a user
 * receives after an assessment. This is illustrative only — the
 * checklist items are placeholder educational guidance, not a real
 * model response or medical advice.
 */

const GUIDANCE_ITEMS = [
  "Walk 30 minutes daily",
  "Reduce sugary beverages",
  "Maintain healthy sleep",
  "Discuss HbA1c with your doctor",
];

function AISection({ onLearnMore = () => {}, onTryPrediction = () => {} }) {
  return (
    <section className="bg-gradient-to-b from-teal-50/60 via-teal-50/20 to-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-teal-100 shadow-sm text-teal-700 text-sm font-semibold px-4 py-1.5">
              <BrainCircuit className="h-4 w-4" />
              AI Powered Assistant
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Personal Health Companion
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              DiaBeta AI's assistant turns your assessment results into
              educational health guidance — plain-language explanations and
              lifestyle pointers you can discuss with your doctor, generated
              from your own prediction data.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                onClick={onLearnMore}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={onTryPrediction}
                className="w-full sm:w-auto"
              >
                Try Prediction
              </Button>
            </div>
          </div>

          {/* Chat preview column */}
          <div className="mt-4 lg:mt-0">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl p-5 sm:p-6">
              <div
                className="flex items-center gap-1.5 mb-5"
                aria-hidden="true"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <ul
                className="space-y-4"
                aria-label="Sample conversation with the AI Health Assistant"
              >
                <li className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-teal-600 text-white text-sm px-4 py-2.5 shadow-sm">
                    I was predicted as medium risk. What should I improve first?
                  </p>
                </li>

                <li>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-teal-50/80 border border-teal-100 px-4 py-3.5 shadow-sm">
                    <p className="text-sm text-slate-700">
                      Based on your assessment...
                      <span className="animate-pulse text-teal-600">
                        Analyzing...
                      </span>
                    </p>

                    <ul className="mt-3 space-y-2">
                      {GUIDANCE_ITEMS.map((item) => (
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
                </li>
              </ul>

              <p className="mt-5 text-xs text-slate-500 border-t border-slate-100 pt-4">
                This guidance is educational and not medical advice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AISection;
