const jwt = require("jsonwebtoken");

module.exports = function tokenVerify(req, res, next) {
  const cookie = req.header("cookie");
  if (!cookie) return res.send("please login again");

  const token = cookie.split("=")[1];
  if (!token) return res.status(401).send("invalid token");

  try {
    const verification = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verification;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
};
