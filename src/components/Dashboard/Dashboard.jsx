import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Medic Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Patients</h2>
          <p>View and manage patient details.</p>
        </div>
        <div className="card">
          <h2>Appointments</h2>
          <p>Check upcoming appointments.</p>
        </div>
        <div className="card">
          <h2>Reports</h2>
          <p>Access medical reports and records.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
