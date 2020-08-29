const { User } = require("../models/schema");
const bcrypt = require("bcrypt");

module.exports = function (passport, Strategy) {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const userInfo = await User.findOne({ email: email });
          if (!userInfo) return done(null, false);

          let validPass = await bcrypt.compare(password, userInfo.password);

          if (!validPass) {
            return done(null, false);
          } else {
            return done(null, userInfo);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );
};
