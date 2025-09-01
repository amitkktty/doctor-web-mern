import React, { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        message: ""
      });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <section className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>We Are Always Ready to Help You. Book An Appointment</h2>
              <img src="img/section-img.png" alt="#" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet pretiumts</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Form */}
          <div className="col-lg-6 col-md-12">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Select Department</option>
                      <option value="Cardiac Clinic">Cardiac Clinic</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Select Doctor</option>
                      <option value="Dr. Akther Hossain">Dr. Akther Hossain</option>
                      <option value="Dr. Dery Alex">Dr. Dery Alex</option>
                      <option value="Dr. Jovis Karon">Dr. Jovis Karon</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write Your Message Here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" className="btn">Book An Appointment</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12">
                  <p>( We will confirm by a text message )</p>
                </div>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-md-12">
            <div className="appointment-image">
              <img src="img/contact-img.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;


