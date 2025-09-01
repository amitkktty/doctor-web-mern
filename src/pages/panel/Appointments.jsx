import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await API.get("/appointments");
        if (data.success) setAppointments(data.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        appointments.map((a) => (
          <div key={a._id} className="border p-2 mb-2 rounded">
            <p><strong>Name:</strong> {a.name}</p>
            <p><strong>Email:</strong> {a.email}</p>
            <p><strong>Date:</strong> {a.date || "Not set"}</p>
            <p><strong>Message:</strong> {a.message || "No message"}</p>
          </div>
        ))
      )}
    </div>
  );
}
