const Query = require("../models/queryModel");
const axios = require("axios");
const { classifyQuery } = require("../services/huggingFaceService");

// Submit a Query
const submitQuery = async (req, res) => {
  const { queryText } = req.body;

  console.log("queryTextNN", queryText);
  try {
    // Use Hugging Face service to classify the query
    const classification = await classifyQuery(queryText);

    // Save the query in the database
    const query = new Query({
      userId: req.user.id,
      queryText,
      classification,
    });

    await query.save();
    res.status(201).json({ message: "Query submitted", classification });
  } catch (error) {
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
