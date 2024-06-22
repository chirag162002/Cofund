const express = require("express");
var router = express.Router();
const Company = require("../models/company");
const company = require("../models/company");

//Route 1  - save company data into database
router.post("/addcompany", async (req, res) => {
  try {
    const {
      company_name,
      company_founders_name,
      company_sdesc,
      company_Ldesc,
      objective,
      company_fund_req,
      company_Email,
    } = req.body;
    const company = new Company({
      company_name,
      company_founders_name,
      company_sdesc,
      company_Ldesc,
      objective,
      company_fund_req,
      company_Email,
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

module.exports = router;
