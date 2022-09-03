const { Router } = require("express");

const DoctorModel = require("../models/Doctor");

const doctorRouter = Router();

doctorRouter.get("/", async (req, res) => {
  console.log(req.headers);
  const doctors = await DoctorModel.find();
  return res.status(200).send(doctors);
});

doctorRouter.post("/single", async (req, res) => {
    const {email} = req.body;
    const doctor = await DoctorModel.findOne({email});
    return res.status(200).send(doctor)
});

module.exports = doctorRouter;
