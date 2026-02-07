const Driver = require("../models/Drivers");
const { getNearbyPincodes } = require("../utils/pincode");
const { sendSMS } = require("../utils/sms");

const broadcastOrder = async (req, res) => {
  try {
    const {orderPincode} = req.body;

    if (!orderPincode) {
      return res.status(400).json({
        message: "orderPincode is required"
      });
    }
    const nearbyPincodes = await getNearbyPincodes(orderPincode);
   
    const drivers = await Driver.find({
      zipCodes: { $in: nearbyPincodes }
    });

    console.log("Matched Users:");
    drivers.forEach(driver => {
      console.log(
        `- ${driver.name}: ${driver.phoneNumber} (works in ${driver.zipCodes.join(", ")})`
      );
    });
    for (const driver of drivers) {
      await sendSMS(
        driver.phoneNumber,
        `New order available near pincode ${orderPincode}`
      );
    }
    return res.json({
      success: true,
      driversNotified: drivers.length
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};
module.exports = {broadcastOrder};
