const express = require("express");
const router = express.Router();
//passport import
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const { User } = require("../models/schema");
const bcrypt = require("bcrypt");
require("../passport-config/config")(passport, Strategy);
//jwt import
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");

const isEmail = require("validator/lib/isEmail");
const isEmpty = require("validator/lib/isEmpty");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(passport.initialize());

//login route
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const token = jwt.sign({ _id: req.user._id }, process.env.TOKEN_SECRET);
    res.cookie("token", token).send("success");
  }
);

//register route
router.post("/register", async (req, res) => {
  //email validation
  let emailValidate = isEmail(req.body.email);
  if (!emailValidate) {
    return res.send("email not valid");
  }
  let emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email already exists");

  //password validation
  let passwordValidate = isEmpty(req.body.password);
  if (passwordValidate) {
    return res.send("password is empty");
  } else if (req.body.password.length < 6) {
    return res.send("password must include more than 6 characters");
  }

  //hash password
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, 5, function (err, hash) {
      let newUser = new User({
        email: req.body.email,
        password: hash,
      });

      try {
        newUser.save();
        res.send("register success");
      } catch (err) {
        console.log(err);
      }
    });
  });
});

//logout route
router.post("/logout", (req, res) => {
  req.logout();
  res.clearCookie("token").send("logged out");
});

module.exports = router;
