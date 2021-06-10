const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});
const User = (module.exports = mongoose.model("User", UserSchema));

