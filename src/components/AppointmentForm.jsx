// AppointmentForm.jsx
import React, { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        cache: "no-store" // 🔹 ensures fresh submission, avoids 304 issue
      });

      const data = await res.json();

      if (data.success) {
        alert(data.message);
        setFormData({  // 🔹 reset form after successful submission
          name: "",
          email: "",
          phone: "",
          date: "",
          message: ""
        });
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Write Your Message Here..."
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Book Appointment</button>
    </form>
  );
}


