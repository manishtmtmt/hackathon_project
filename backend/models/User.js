const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    "username": String,
    "role": {type: String, default: "admin"}
})

const UserModel = model("user", UserSchema);

module.exports = UserModel;