const { Router } = require("express");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const UserModel = require("../models/Patient");

const userRouter = Router();

userRouter.post("/create", async (req, res) => {
  const user = req.body;
  const existUser = await UserModel.findOne({email: user.email})
  if(existUser) return res.status(400).send("user already exists")
  bcrypt.hash(user.password, 8, async function (err, hash) {
    if (err) return res.status(500).send("some error occured");
    const newUser = new UserModel({ ...user, password: hash });
    await newUser.save();
  });
  return res.status(200).send("signup successful");
});

userRouter.post("/login", async (req, res) => {
  const data = req.body;
  const existUser = await UserModel.findOne({ email: data.email });
  if (!existUser) return res.status(404).send("Invalid Credentials");
  bcrypt.compare(data.password, existUser.password, function (err, result) {
    // res === true
    if (err) return res.status(500).send("something went wrong");
    if (!result) return res.status(401).send("Invalid credentials");
    const token = jwt.sign(
      {
        userId: existUser._id,
        role: existUser.role,
      },
      "secret",
      { expiresIn: "24h" }
    );
    return res.status(200).send({token, role: existUser.role, name: existUser.username});
  });
});

module.exports = userRouter;
