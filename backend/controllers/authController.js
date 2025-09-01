import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Register User
export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, Email & Password required" });
    }

    // check duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Password will be hashed by mongoose middleware
    console.log('Registration - Original password:', password);

    const user = await User.create({
      name,
      email,
      password, // Raw password - will be hashed by mongoose middleware
      role: role || "staff",   // ✅ model me staff/admin allowed hai, user nahi
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

// Login User
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    console.log('Found user:', { email: user.email, hashedPassword: user.password });
    console.log('Login attempt with password:', password);
    
    const ok = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', ok);
    
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { sub: user._id, role: user.role },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};
 

