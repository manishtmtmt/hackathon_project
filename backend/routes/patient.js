const { Router } = require("express");

const patientRouter = Router();

const PatientModel = require("../models/Patient");

patientRouter.post("/create/:doctorId", async (req, res) => {
  const { patientname, email, description, completed } = req.body;
  const { doctorId } = req.params;
  const newPatient = new PatientModel({
    patientname,
    email,
    description,
    completed,
    doctorId,
  });
  await newPatient.save();
  return res.status(200).send("Patient successfully booked the appointment");
});

patientRouter.get("/", async (req, res) => {
  const { specilization } = req.headers;
  const patients = await PatientModel.find({ specilization });
  return res.status(200).send(patients);
});

patientRouter.patch("/edit/:patientId", async (req, res) => {
  const { patientId } = req.params;
  console.log(req.params)
  const { completed } = req.body;
  const updatedPatient = await PatientModel.findOneAndUpdate(
    { _id: patientId },
    { $set: { completed } },
    { new: true }
  );
  return res.status(200).send(updatedPatient);
});

patientRouter.delete("/delete/:patientId", async (req, res) => {
  const { patientId } = req.params;
  await PatientModel.findOneAndDelete({ _id: patientId });
  return res.status(200).send("Deleted successfully");
});

patientRouter.get("/queue/:doctorId", async (req, res) => {
  const {doctorId} = req.params;
  const patients = await PatientModel.find({ doctorId });
  return res.status(200).send(patients);
});

patientRouter.get("/patientQueue/:doctorId", async (req, res) => {
  const {doctorId} = req.params;
  const patients = await PatientModel.find({ doctorId, completed: false });
  return res.status(200).send(patients);
});

module.exports = patientRouter;
