import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";
import "../App.css";
import DashboardIcon from "../assets/Dashboard.svg";
import MedicLogo from "../assets/planning.png";
import Home from "../assets/home.svg";
import User from "../assets/users.svg";
import Registration from "../assets/Registraion.svg";
import SettingsIcon from "../assets/settings.svg";
import LogoutIcon from "../assets/logout.svg";
import Activity from "../assets/activity.png";
import Activity1 from "../assets/user-01.png";

function Sidebar({ onClose }) {
  const location = useLocation();
  const [message] = useState("");

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-card-full">
      <div className="sidebar-header">
        <img src={MedicLogo} className="sidebar-logo" alt="Medic Logo" />
        <span className="sidebar-brand">TodoNest</span>
        {/* Close Icon */}
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close sidebar"
          title="Close sidebar"
        >
          ✕
        </button>
      </div>

      <nav>
        <ul>
          <li className={isActive("/home") ? "active" : ""}>
            <Link to="/home">
              <img src={Home} alt="Home" className="sidebar-icon" />
              Home
            </Link>
          </li>
          <li className={isActive("/dashboard") ? "active" : ""}>
            <Link to="/dashboard">
              <img
                src={DashboardIcon}
                alt="Dashboard"
                className="sidebar-icon"
              />
              Dashboard
            </Link>
          </li>

          <li className={isActive("/activity") ? "active" : ""}>
            <Link to="/activity">
              <img src={Activity1} alt="Activity" className="sidebar-icon" />
              Activity
            </Link>
          </li>

          <li className={isActive("/calendar") ? "active" : ""}>
            <Link to="/calendar">
              <img src={Activity} alt="Calendar" className="sidebar-icon" />
              Calendar
            </Link>
          </li>

          <li className={isActive("/register-patient") ? "active" : ""}>
            <Link to="/register-patient">
              <img
                src={User}
                alt="PatientRegistration"
                className="sidebar-icon"
              />
              Create New Activity
            </Link>
          </li>
          <li className={isActive("/appointment") ? "active" : ""}>
            <Link to="/appointment">
              <img
                src={Registration}
                alt="AppointmentTable"
                className="sidebar-icon"
              />
              Appointment
            </Link>
          </li>

          <li className={isActive("/settings") ? "active" : ""}>
            <Link to="/settings">
              <img src={SettingsIcon} alt="Settings" className="sidebar-icon" />
              Settings
            </Link>
          </li>

          <li className={isActive("/login") ? "active" : ""}>
            <Link to="/login">
              <img src={LogoutIcon} alt="login" className="sidebar-icon" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {message && (
        <div
          style={{
            marginTop: "auto",
            padding: "10px",
            color: "#6a4baf",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
