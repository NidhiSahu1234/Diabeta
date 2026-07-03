import Container from "../common/Container";
import { BrainCircuit } from "lucide-react";
/**
 * DashboardPreview
 *
 * A showcase section that previews what a user sees after logging in.
 * This is NOT the real dashboard — every value shown is a neutral
 * placeholder (e.g. "Low Risk", "Assessment Available"), never a
 * generated statistic or medical claim.
 *
 * Card metadata lives in DASHBOARD_CARDS and is rendered with map();
 * each card's inner content is resolved via CARD_CONTENT so the grid
 * markup stays identical while each card's body stays purpose-built.
 */

const DASHBOARD_CARDS = [
  {
    id: "risk",
    title: "Risk Profile",
    status: "Active",
  },

  {
    id: "assessment",
    title: "Recent Assessment",
    status: "Today",
  },

  {
    id: "trends",
    title: "Health Trends",
    status: "Weekly",
  },

  {
    id: "history",
    title: "Prediction History",
    status: "Updated",
  },

  {
    id: "recommendation",
    title: "AI Recommendation",
    status: "Ready",
  },

  {
    id: "summary",
    title: "Health Summary",
    status: "Latest",
  },
];

function RiskProfileBody() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-16 w-16 rounded-full flex-shrink-0"
        style={{
          background:
            "conic-gradient(#0d9488 0deg 250deg, #ccfbf1 250deg 360deg)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-1.5 rounded-full bg-white flex items-center justify-center">
          <span className="text-lg font-bold text-slate-900">18%</span>
        </div>
      </div>
      <div>
        <span className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
          Low Risk
        </span>
        <p className="mt-2 text-sm text-slate-500">
          Based on your most recent assessment
        </p>
      </div>
    </div>
  );
}

function RecentAssessmentBody() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl flex-shrink-0"
        aria-hidden="true"
      >
        🩺
      </div>
      <div>
        <span className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
          Assessment Available
        </span>
        <p className="mt-2 text-sm text-slate-500">Last completed: —</p>
      </div>
    </div>
  );
}

function HealthTrendsBody() {
  const bars = [40, 65, 50, 80, 60, 90, 45];
  return (
    <div>
      <div
        className="flex items-end gap-2 h-28"
        role="img"
        aria-label="Placeholder chart representing health trend data"
      >
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-md bg-teal-100"
            style={{ height: `${height}%` }}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-500">
        Sample visualization — your trends appear here after assessments
      </p>
    </div>
  );
}

function PredictionHistoryBody() {
  const rows = [
    { label: "Assessment #3", status: "Reviewed" },
    { label: "Assessment #2", status: "Reviewed" },
    { label: "Assessment #1", status: "Pending" },
  ];
  return (
    <ul className="space-y-3">
      {rows.map((row) => (
        <li
          key={row.label}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-slate-600">{row.label}</span>
          <span className="rounded-full bg-slate-50 text-slate-600 text-xs font-medium px-2.5 py-1">
            {row.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

function AiRecommendationBody() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 flex-shrink-0"
        aria-hidden="true"
      >
        <BrainCircuit size={26} className="text-teal-600" strokeWidth={2.2} />
      </div>
      <div>
        <span className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
          Recommendation Ready
        </span>
        <p className="mt-2 text-sm text-slate-500">
          Personalized guidance based on your inputs
        </p>
      </div>
    </div>
  );
}

function HealthSummaryBody() {
  const items = [
    { label: "Activity", status: "Tracked" },
    { label: "Sleep", status: "Tracked" },
    { label: "Nutrition", status: "Tracked" },
  ];
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-slate-600">{item.label}</span>
          <span className="rounded-full bg-slate-50 text-slate-600 text-xs font-medium px-2.5 py-1">
            {item.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

const CARD_CONTENT = {
  risk: RiskProfileBody,
  assessment: RecentAssessmentBody,
  trends: HealthTrendsBody,
  history: PredictionHistoryBody,
  recommendation: AiRecommendationBody,
  summary: HealthSummaryBody,
};

function DashboardPreview() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Health Insights Dashboard
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore how DiaBeta AI transforms health data into meaningful
            insights using machine learning and interactive analytics.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 rounded-3xl bg-white border border-slate-100 shadow-xl p-4 sm:p-6 lg:p-6">
          {/* Dashboard Header */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Health Dashboard Today's Overview
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Preview of your personalized health dashboard
              </p>
            </div>

            <button className="mt-4 sm:mt-0 rounded-xl border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition">
              ⬇ Export PDF
            </button>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DASHBOARD_CARDS.map((card) => {
              const CardBody = CARD_CONTENT[card.id];
              return (
                <li
                  key={card.id}
                  className="
    rounded-2xl
    bg-white
    border
    border-slate-100
    shadow-md
    p-5
    sm:p-6
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:border-teal-200
  "
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      {card.title}
                    </h3>

                    <span className="rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
                      {card.status}
                    </span>
                  </div>
                  <CardBody />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default DashboardPreview;
