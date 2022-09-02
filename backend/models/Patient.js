const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  patientname: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  Specilization: { type: String, required: true },
});

const PatientModel = model("patient", patientSchema);

module.exports = PatientModel;
