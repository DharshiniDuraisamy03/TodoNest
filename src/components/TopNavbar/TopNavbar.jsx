import React, { useState } from "react";
import "./TopNavbar.css";
import MedicLogo from "../../assets/planning.png";
import Sidebar from "../Sidebar";

function TopNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [clinicName, setClinicName] = useState("Todo Nest System");
  const [showSidebar, setShowSidebar] = useState(false);

  const clinics = ["Todo Nest System"];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectClinic = (name) => {
    setClinicName(name);
    setShowDropdown(false);
  };

  const handleLeftButtonClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="top-navbar">
        {/* Left side: button + logo + clinic dropdown */}
        <div className="navbar-left">
          <button className="left-top-btn" onClick={handleLeftButtonClick}>
            ☰
          </button>

          <div className="navbar-card">
            <img src={MedicLogo} alt="Medic Logo" className="navbar-logo" />
            <div className="clinic-dropdown" onClick={toggleDropdown}>
              <span className="clinic-name">{clinicName}</span>
              {showDropdown && (
                <div className="dropdown-menu">
                  {clinics.map((clinic, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => selectClinic(clinic)}
                    >
                      {clinic}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side: notification + profile */}
        <div className="navbar-right">
          <button className="notification-btn" title="Notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 22c1.1 0 2-.89 2-1.99h-4c0 1.1.9 1.99 2 1.99zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.99 2h15.98L18 16z" />
            </svg>
            <span className="notification-badge">3</span>
          </button>

          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <span className="profile-name">John Doe</span>
        </div>
      </div>

      {/* Sidebar Component */}
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
}

export default TopNavbar;
