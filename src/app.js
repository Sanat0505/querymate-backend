const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const queryRoutes = require("./routes/queryRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/querymate/auth", userRoutes);
app.use("/querymate/queries", queryRoutes);

module.exports = app;
