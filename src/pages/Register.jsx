import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await API.post("/auth/register", { name, email, password });
      navigate("/login", { replace: true });
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Registration failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input type="text" placeholder="Name" className="border p-2 w-full mb-3 rounded" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="bg-green-600 text-white px-4 py-2 w-full rounded disabled:opacity-60" disabled={loading} type="submit">
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
}


