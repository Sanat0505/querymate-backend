const Query = require("../models/queryModel");
const axios = require("axios");
const { classifyQuery } = require("../services/huggingFaceService");

// Submit a Query
const submitQuery = async (req, res) => {
  const { queryText } = req.body;
  let automatedResponse = "";
  let status = ""
  try {
    // Use Hugging Face service to classify the query
    const classification = await classifyQuery(
      `Classify this query as "Automated" or "Escalated": ${queryText}`
    );
    // Save the query in the database
    if (classification === "Automated") {
      automatedResponse = await classifyQuery(queryText);
      status = "Done"
    }
    const query = new Query({
      userId: req.user.id,
      queryText,
      classification,
      response: automatedResponse,
      status: status
    });
    console.log("classification", classification);
    await query.save();
    res
      .status(201)
      .json({
        message: "Query submitted",
        classification,
        response: automatedResponse || "Query escalated to admin.",
      });
  } catch (error) {
    console.log("eror", error);
    res.status(500).json({ message: "Error submitting query", error });
  }
};

// Get User Queries
const getUserQueries = async (req, res) => {
  try {
    const queries = await Query.find({ userId: req.user.id });
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching queries", error });
  }
};

module.exports = { submitQuery, getUserQueries };
