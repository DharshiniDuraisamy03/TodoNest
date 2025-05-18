import React, { useState } from "react";
import "./PatientRegistration.css";

function PatientRegistration({ onAddPatient }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    bloodGroup: "",
    number: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    doctor: "",
    department: "",
    notes: "",
    address: "",
    city: "",
    maritalStatus: "",
    occupation: "",
    religion: "",
    gender: "",
    nationality: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const patientData = {
      ...formData,
      id: Date.now(), // unique ID
      status: "Pending",
    };

    try {
      // get existing patients or initialize empty array
      const existingPatients =
        JSON.parse(localStorage.getItem("patients")) || [];

      // add new patient to the list
      existingPatients.push(patientData);

      // update localStorage
      localStorage.setItem("patients", JSON.stringify(existingPatients));

      alert("Patient registered successfully!");

      // pass new patient to parent component if needed
      if (onAddPatient) {
        onAddPatient(patientData);
      }

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        bloodGroup: "",
        number: "",
        email: "",
        appointmentDate: "",
        appointmentTime: "",
        doctor: "",
        department: "",
        notes: "",
        address: "",
        city: "",
        maritalStatus: "",
        occupation: "",
        religion: "",
        gender: "",
        nationality: "",
        language: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error registering patient");
    }
  };

  return (
    <div className="form-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name - Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Phone Number - Email */}
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Appointment Date - Appointment Time */}
        <div className="form-row">
          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Appointment Time</label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Doctor - Department */}
        <div className="form-row">
          <div className="form-group">
            <label>Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Williams">Dr. Williams</option>
            </select>
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}

export default PatientRegistration;
