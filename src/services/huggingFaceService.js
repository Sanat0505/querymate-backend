const axios = require("axios");
// const { huggingFaceApiToken } = require("../config/config");
const huggingFaceApiToken = "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"
const HUGGING_FACE_API_URL =
  "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct";

const classifyQuery = async (queryText) => {
  // try {
  //   const response = await axios.post(
  //     HUGGING_FACE_API_URL,
  //     { inputs: queryText },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${huggingFaceApiToken}`,
  //       },
  //     }
  //   );

  //   // Return the classification label
  //   return response.data[0].label;
  // } catch (error) {
  //   console.error("Error communicating with Hugging Face API:", error.message);
  //   throw new Error("AI service unavailable");
  // }
  try {
    console.log("working....")
    const response = await axios.post(
      HUGGING_FACE_API_URL,
      { inputs: queryText },
      {
        headers: {
          Authorization: `Bearer ${huggingFaceApiToken}`,
        },
        timeout: 30000, // 30 seconds timeout
      }
    );

    // Validate response structure
    if (response.data && response.data.length > 0 && response.data[0].label) {
      return response.data[0].label;
    } else {
      throw new Error("Unexpected API response format");
    }
  } catch (error) {
    console.error(
      "Error communicating with Hugging Face API:",
      error.response?.data || error.message
    );
    throw new Error("AI service unavailable");
  }
};

module.exports = { classifyQuery };
