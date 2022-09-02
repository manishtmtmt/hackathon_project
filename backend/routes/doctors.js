const {Router} = require("express");

const DoctorModel = require("../models/Doctor")

const doctorRouter = Router();

doctorRouter.get("/", async (req, res) => {
    console.log(req.headers)
    const doctors = await DoctorModel.find();
    return res.status(200).send(doctors)
})

module.exports = doctorRouter;