import Container from "../common/Container";

/**
 * AssessmentHeader
 *
 * Reusable page header for prediction/assessment-flow pages. Renders a
 * title and subtitle on the left, with an optional slot on the right
 * for page-specific controls (e.g. a button or status badge) passed in
 * as children.
 *
 * Props:
 * title    -> string, the page heading (required)
 * subtitle -> string, supporting copy under the heading (optional)
 * children -> optional content rendered on the right side
 */

function AssessmentHeader({ title, subtitle, children }) {
  return (
    <header className="bg-gradient-to-b from-teal-50/60 to-white border-b border-slate-100 py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            ) : null}
          </div>

          {children ? (
            <div className="flex justify-center lg:justify-end flex-shrink-0">
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

export default AssessmentHeader;
