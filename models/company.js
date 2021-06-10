const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  currentMP: {
    type: Number,
  },
  marketCap: {
    type: Number,
  },
  stockPE: {
    type: Number,
  },
  dividendYield: {
    type: Number,
  },
  roce: {
    type:Number,
  
  },
  roePrevAnnum: {
    type:Number,
  
  },
  debtToEquity:{
    type:Number,
  
  },
  eps:{
    type:Number,
  
  },
  reserves: {
    type:Number,
  
  },
  debt:{
    type:Number,
  
  },
  status: {
    type: Boolean,
  },
});
const Company = (module.exports = mongoose.model("Company", CompanySchema));

