require("dotenv").config();
require("express-async-errors");
const bodyParser = require("body-parser");
const investorRoutes = require("./routes/investorRoutes");
const connectToMongo = require("./db/db");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const mainRouter = require("./routes/user");

const app = express();

// Connect to the database
connectDB(process.env.MONGO_URI);
connectToMongo();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", investorRoutes);

// Routes
app.use("/api/v1", mainRouter);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
