const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(7000));
