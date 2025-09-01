import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// ✅ Logout Route
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });

    res.clearCookie("connect.sid"); // Session cookie name
    return res.status(200).json({ message: "Logged out successfully" });
  });
});

export default router;


