const express = require("express");
var router = express.Router();
const multer = require("multer");
const Company = require("../models/company");
const company = require("../models/company");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filename
  },
});

const upload = multer({ storage: storage });

//Route 1  - save company data into database
router.post("/addcompany", upload.single("image"), async (req, res) => {
  try {
    const {
      company_name,
      company_founders_name,
      company_sdesc,
      company_Ldesc,
      objective,
      company_fund_req,
      total_share,
      company_Email,
    } = req.body;
    const imagePath = req.file.path; // Path to the uploaded image file
    const company = new Company({
      company_name,
      company_founders_name,
      company_sdesc,
      company_Ldesc,
      objective,
      company_fund_req,
      total_share,
      company_Email,
      image: imagePath, // Store image path in the database
    });
    const savedCompany = await company.save();
    res.json(savedCompany);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 - fetch all companies from database

router.get("/fetchallcompanies", async (req, res) => {
  try {
    const Companies = await Company.find({});
    res.json(Companies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Route 3 - fetch specfic company from database

router.get("/:id", async (req, res) => {
  try {
    // const Companies = await Company.find({  });
    let Companies = await company.findById(req.params.id);
    res.json(Companies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Update a company by ID
router.put("/:id", async (req, res) => {
  try {
    const companyId = req.params.id;
    const { company_fund_req, total_share } = req.body; // Destructure update data from the request body

    // Find the company by ID and update its data
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      { company_fund_req, total_share }, // Updated fields
      { new: true }
    );

    // Check if the company exists
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Send the updated company as response
    res.json(updatedCompany);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
