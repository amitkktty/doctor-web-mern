import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/panel/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await API.post("/auth/login", { email, password });
      if (!data?.token) throw new Error("Token missing");
      localStorage.setItem("token", data.token);
      navigate(from, { replace: true });
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#868e96]">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-96 p-30">
        <h2 className="text-2xl mb-4 text-center font-bold">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input type="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded disabled:opacity-60" disabled={loading} type="submit">
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-3 text-center">
          Don’t have an account? <Link to="/register" className="text-green-600">Register</Link>
        </p>
      </form>
    </div>
  );
}


