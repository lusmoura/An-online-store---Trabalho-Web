const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define schema for /users
const userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
