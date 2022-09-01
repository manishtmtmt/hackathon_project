const {Router} = require("express");

const UserModel = require("../models/User")

const userRouter = Router();

userRouter.post("/create", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    return res.send("signup successful")
})

module.exports = userRouter;