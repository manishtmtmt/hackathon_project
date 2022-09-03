const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  patientname: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  specilization: { type: String },
  completed: { type: Boolean, required: true },
  doctorId: { type: String },
});

const PatientModel = model("patient", patientSchema);

module.exports = PatientModel;
