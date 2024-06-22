const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_founders_name: {
        type: String,
        required: true
    },
    company_sdesc: {
        type: String,
        required: true
    },
    company_Ldesc: {
        type: String,
        required: true,
    },
    objective: {
        type: String,
        required: true,
    },
    company_fund_req: {
        type: String,
        required: true
    },
    total_share: {
        type: String, 
        required: true
    },
    company_Email: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('company', CompanySchema);