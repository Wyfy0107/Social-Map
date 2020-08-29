const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

exports.User = User;

const PostSchema = new mongoose.Schema({
  email: String,
  content: String,
  likes: Number,
});

const Post = mongoose.model("Post", PostSchema);

exports.Post = Post;
