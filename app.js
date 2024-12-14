const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const queryRoutes = require("./src/routes/queryRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/querymate/auth", userRoutes);
app.use("/querymate/queries", queryRoutes);

module.exports = app;
