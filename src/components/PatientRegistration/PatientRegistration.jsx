import React, { useState } from "react";
import { getDB } from "../../db";

function PatientRegistration() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = await getDB();
    await db.run(
      `INSERT INTO patients (name, age, gender, contact) VALUES (?, ?, ?, ?)`,
      [patient.name, patient.age, patient.gender, patient.contact]
    );
    alert("Patient registered successfully!");
    setPatient({ name: "", age: "", gender: "", contact: "" });
  };

  return (
    <div className="patient-form-container">
      <h2>Register New Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={patient.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={patient.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={patient.contact}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default PatientRegistration;
