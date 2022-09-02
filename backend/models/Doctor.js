const { model, Schema } = require("mongoose");

const DoctorSchema = new Schema({
  name: { type: String, required: true },
  profileImage: { type: String, required: true },
  specilization: { type: String, required: true },
  experience: { type: String },
});

const DoctorModel = model("doctor", DoctorSchema);

module.exports = DoctorModel;
