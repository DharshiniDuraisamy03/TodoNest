import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MedicLogo from "./assets/Logomark.svg";
import Login from "./components/LoginPage/LoginPage";
import Home from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientRegistration from "./components/PatientRegistration/PatientRegistration"; // Fixed import name
import RawQueryBox from "./components/RawQueryBox/RawQueryBox";
import TabSync from "./components/TabSync/TabSync";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import React, { useState, useEffect } from "react";

function App() {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    const newPatient = {
      id: Date.now(),
      patientName: patient.firstName + " " + patient.lastName,
      age: calculateAge(patient.dob),
      phone: patient.number,
      date: "",
      time: "",
      status: "",
      doctor: "",
      department: "",
      notes: "",
      ...patient,
    };
    setPatients((prev) => [...prev, newPatient]);
  };

  function calculateAge(dob) {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const diffMs = Date.now() - birthDate.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  return (
    <Router>
      <TopNavbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/register-patient"
              element={<PatientRegistration onAddPatient={addPatient} />}
            />
            <Route path="/sql-query" element={<RawQueryBox />} />
            <Route path="/tab-sync" element={<TabSync />} />
            <Route
              path="/appointment"
              element={<AppointmentTable patients={patients} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
