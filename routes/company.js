const express = require("express");
const { model } = require("mongoose");
const Company = require("../models/company");
const companyController = require("../controllers/company");
const route = express.Router();



  
//company insertion
route.post("/create", companyController.verifyJwtToken, companyController.create);
// company list 
route.post("/list", companyController.verifyJwtToken, companyController.list);
// company dropdown 
route.post("/dropdown",companyController.verifyJwtToken, companyController.dropdown);

route.post("/login", companyController.login);



module.exports = route;
