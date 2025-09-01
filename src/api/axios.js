// frontend/src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // <-- backend ka base
  withCredentials: true, // optional
});

export default API;


