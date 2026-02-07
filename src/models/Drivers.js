const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  zipCodes: [Number]
});

module.exports = mongoose.model("Driver", driverSchema);
