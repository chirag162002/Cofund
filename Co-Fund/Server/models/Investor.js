const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  shareValue: { type: Number, required: true },
  shareAmount: { type: Number, required: true },
  username: { type: String, required: true },
  imageUrl: { type: String, required: true }  // Added imageUrl field
});

module.exports = mongoose.model('Investor', InvestorSchema);
