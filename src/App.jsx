import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar/TopNavbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientRegistration from "./components/PatientRegistration/PatientRegistration";
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import Settings from "./components/Settings/Settings";
import ActivityPage from "./components/Activity/ActivityPage";
import Activity from "./components/ActivityPage/Activity";

import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

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
      <TopNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <div
          ref={sidebarRef}
          style={{ position: "fixed", left: 0, top: 80, zIndex: 100 }}
        >
          <Sidebar />
        </div>
      )}

      <div
        className="main-layout"
        style={{
          marginLeft: showSidebar ? 220 : 0,
          marginTop: 80,
          transition: "margin-left 0.3s",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/register-patient"
            element={<PatientRegistration onAddPatient={addPatient} />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<ActivityPage />} />
          <Route path="/activity" element={<Activity />} />
          <Route
            path="/appointment"
            element={<AppointmentTable patients={patients} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
