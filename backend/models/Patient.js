const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  patientname: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  specilization: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const PatientModel = model("patient", patientSchema);

module.exports = PatientModel;
