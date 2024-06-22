const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Investor = require("../models/Investor");

router.use(bodyParser.json()); // Middleware to parse JSON bodies

// Create a new investor entry
router.post("/investors", async (req, res) => {
  const { companyName, shareValue, shareAmount, username, imageUrl } = req.body;

  // Check if required fields are present in the request body
  if (!companyName || !shareValue || !username || !imageUrl) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newInvestor = new Investor({
      companyName,
      shareValue,
      shareAmount,
      username,
      imageUrl,
    });
    await newInvestor.save();
    res.status(201).json(newInvestor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all investor entries
router.get("/investors", async (req, res) => {
  try {
    const investors = await Investor.find();
    res.status(200).json(investors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/investors/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const investors = await Investor.find({ username: name });

    if (investors.length === 0) {
      return res.status(404).json({ message: "No investors found" });
    }

    res.status(200).json(investors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
