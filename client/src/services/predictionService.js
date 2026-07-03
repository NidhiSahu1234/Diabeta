const API_URL = "http://127.0.0.1:5000/api/predict";

export async function predictDiabetes(formData) {
  try {
    console.log("Sending form data:", formData);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Prediction request failed.");
    }

    const result = await response.json();

    console.log("Prediction Response:", result);

    return result.data;
  } catch (error) {
    console.error("Prediction Error:", error);
    throw error;
  }
}
