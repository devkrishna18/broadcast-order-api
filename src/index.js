const express = require("express");
const mongoose = require("mongoose");
const broadcastRoutes = require("./routes/broadcastRoutes");

const app = express();

app.use(express.json());
require("./config/database").connectDB();
app.use("/api", broadcastRoutes);

app.get("/",(req,res)=>{
  res.send("Welcome to Broadcast Api");
})
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
