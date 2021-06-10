const { create, list, dropdown, login } = require("../service/company");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (req, res) => {
    try {
      const result = await create(req.body);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  list: async (req, res) => {
    try {
      const name = req.query.name;
      const result = await list(name);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  dropdown: async (req, res) => {
    try {
      const name = req.query.name;
      const result = await dropdown(name);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  login: async (req, res) => {
    try {
      let query = req.query;
      if (
        !["username", "password"].every((key) =>
          Object.keys(req.query).includes(key)
        )
      ){
      res.json({message: "username or password missing"});

      }
    
      console.log("req.query ", query);
      const result = await login(query);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  verifyJwtToken: async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json("Unauthorize user");

    try {
      const decoded = jwt.verify(token, "secret");
      req.user = decoded;
      if(decoded){
        return next();
      } else {
        res.status(401);
        res.send({ status: false, message: "Unauthorized Access" });
      }
     
    } catch (e) {
      res.status(400).json("Token not valid");
    }
  },
};
