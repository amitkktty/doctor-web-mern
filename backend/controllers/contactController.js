import Contact from "../models/Contact.js";

// Create new contact message
export const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Contact message submitted successfully",
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};

// Get all contact messages
export const getContacts = async (req, res, next) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      message: "Contacts fetched successfully",
      data: list,
    });
  } catch (err) {
    next(err);
  }
};

// Get single contact by ID
export const getContact = async (req, res, next) => {
  try {
    const item = await Contact.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.json({
      success: true,
      message: "Contact fetched successfully",
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

// Update contact
export const updateContact = async (req, res, next) => {
  try {
    const item = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.json({
      success: true,
      message: "Contact updated successfully",
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

// Delete contact
export const deleteContact = async (req, res, next) => {
  try {
    const item = await Contact.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};


