// src/components/TopNavbar/TopNavbar.jsx
// import React from "react";
// import "./TopNavbar.css";
// import ProfilePic from "../../assets/react.svg"; // add your profile pic path

// function TopNavbar() {
//   return (
//     <div className="top-navbar">
//       <div className="navbar-left">Northern Central Clinic</div>
//       <div className="navbar-right">
//         <img src={ProfilePic} alt="Profile" className="profile-pic" />
//         <span className="profile-name">John Doe</span>
//       </div>
//     </div>
//   );
// }

// export default TopNavbar;

import React, { useState } from "react";
import "./TopNavbar.css";
import MedicLogo from "../../assets/Logomark.svg";
import DropdownIcon from "../../assets/Logomark.svg";

function TopNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [clinicName, setClinicName] = useState("Northern Central Clinic");

  const clinics = [
    "Northern Central Clinic",
    "Southern Medical Center",
    "Eastern Health Hub",
    "Western Care Clinic",
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectClinic = (name) => {
    setClinicName(name);
    setShowDropdown(false);
  };

  return (
    <div className="top-navbar">
      <div className="navbar-card">
        <img src={MedicLogo} alt="Medic Logo" className="navbar-logo" />
        <div className="clinic-dropdown" onClick={toggleDropdown}>
          <span className="clinic-name">{clinicName}</span>
          <img
            src={DropdownIcon}
            alt="Dropdown Icon"
            className="dropdown-icon"
          />
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

      <div className="navbar-right">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <span className="profile-name">John Doe</span>
      </div>
    </div>
  );
}

export default TopNavbar;
