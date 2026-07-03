import Button from "../common/Button";

/**
 * PredictionActions
 *
 * Action bar for the assessment flow with two buttons: "Reset
 * Assessment" and "Run AI Prediction". Purely presentational — no
 * internal logic, state, or routing. Optional onReset/onRunPrediction
 * handlers can be passed in by the parent form that owns the actual
 * reset/submit behavior.
 */

function PredictionActions({
  onReset = () => {},
  onRunPrediction = () => {},
  isLoading = false,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
      <Button
        variant="outline"
        size="lg"
        onClick={onReset}
        className="w-full sm:w-auto"
      >
        Reset Assessment
      </Button>

      <Button
        variant="primary"
        size="lg"
        onClick={onRunPrediction}
        disabled={isLoading}
        className="w-full sm:w-auto"
      >
        {isLoading ? "Analyzing..." : "Run AI Prediction"}
      </Button>
    </div>
  );
}

export default PredictionActions;
