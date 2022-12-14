const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
});

const UserModel = model("user", userSchema);

module.exports = UserModel;
