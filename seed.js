const mongoose = require("mongoose");
const Driver = require("./src/models/Drivers");

require("./src/config/database").connectDB();

const drivers = [
  {
    name: "Krishna",
    phoneNumber: "+919999999999",
    zipCodes: [560068, 560067]
  },
  {
    name: "Aman",
    phoneNumber: "+918888888888",
    zipCodes: [560070,560071]
  },
   {
    name: "Raj",
    phoneNumber: "+917777777777",
    zipCodes: [560080,560081]
  },
  {
    name: "Sita",
    phoneNumber: "+916666666666",
    zipCodes: [123456, 123460]
  },
   {
    name: "xyz",
    phoneNumber: "+916666886666",
    zipCodes: [123457, 123459]
  }

];

const seed = async () => {
  await Driver.deleteMany({});
  await Driver.insertMany(drivers);
  console.log("Database seeded");
  process.exit();
};
seed();
