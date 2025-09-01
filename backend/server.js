// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import session from "express-session";


import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS fix: dono frontend ports allow
// CORS setup
const ORIGINS = ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"];

app.use(cors({
  origin: function(origin, callback) {
    // origin undefined (Postman / server-side requests) allow
    if (!origin) return callback(null, true);

    if (ORIGINS.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = `CORS policy: The origin ${origin} is not allowed`;
      return callback(new Error(msg), false);
    }
  },
  credentials: true, // cookies / auth headers allow
}));


//const ORIGINS = ["http://localhost:5173", "http://localhost:5174"];
//
//app.use(cors({
//  origin: function(origin, callback) {
//    if (!origin) return callback(null, true); // Postman / server-side requests allow
//    if (ORIGINS.indexOf(origin) === -1) {
//      const msg = `CORS policy: The origin ${origin} is not allowed`;
//      return callback(new Error(msg), false);
//    }
//    return callback(null, true);
//  },
//  credentials: true,
//}));

// ✅ Middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ✅ NEW: Session Middleware (only change for logout support)
app.use(session({
  secret: process.env.SESSION_SECRET || "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true in production with HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));


// ✅ DB connection
mongoose
  .connect(process.env.MONGODB_URI, { dbName: process.env.MONGO_DB || undefined })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Health check
app.get("/", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contacts", contactRoutes);

// 404
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


