const express = require("express");
const router = express.Router();
const {broadcastOrder} = require("../controllers/bsControllers");

router.post("/broadcastOrder", broadcastOrder);

module.exports = router;
