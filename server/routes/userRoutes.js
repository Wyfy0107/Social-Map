const express = require("express");
const router = express.Router();

const tokenVerify = require("../jwt/tokenVerify");
const { User } = require("../models/schema");

//get user data route
router.get("/", tokenVerify, async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.user._id });
    res.send(data.email);
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
