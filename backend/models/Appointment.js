import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
