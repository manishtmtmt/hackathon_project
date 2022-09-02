const { Router } = require("express");

const patientRouter = Router();

const PatientModel = require("../models/Patient");

patientRouter.post("/create", async (req, res) => {
  const data = req.body;
  const newPatient = new PatientModel(data);
  await newPatient.save();
  return res.status(200).send("Patient successfully booked the appointment");
});

patientRouter.get("/", async (req, res) => {
  const { specilization } = req.headers;
  const patients = await PatientModel.find({ specilization });
  return res.status(200).send(patients)
});

module.exports = patientRouter;
