const mongoose = require("mongoose");
//define user schema
const UserSchema = new mongoose.Schema({
  accessToken: {
    type: String,
  },
  userId: {
    type: String,
    required: [true, "please provide id"],
  },
  firstName: {
    type: String,
    required: [true, "please provide first name"],
    minlength: 3,
    maxlength: 50,
  },
  secondName: {
    type: String,
    required: [true, "please provide second name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
  },
  marketingConsent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
