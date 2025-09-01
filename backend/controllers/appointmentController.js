import Appointment from "../models/Appointment.js";

// Create new appointment
export const createAppointment = async (req, res, next) => {
  try {
    const appt = await Appointment.create(req.body);
    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: appt,
    });
  } catch (err) {
    next(err);
  }
};

// Get all appointments
export const getAppointments = async (req, res, next) => {
  try {
    const items = await Appointment.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      message: "Appointments fetched successfully",
      data: items,
    });
  } catch (err) {
    next(err);
  }
};

// Get single appointment by ID
export const getAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
    res.json({
      success: true,
      message: "Appointment fetched successfully",
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

// Update appointment
export const updateAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
    res.json({
      success: true,
      message: "Appointment updated successfully",
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

// Delete appointment
export const deleteAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
    res.json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};


