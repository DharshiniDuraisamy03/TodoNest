import React from "react";
import "./HomePage.css";
import MedicLogo from "../../assets/Logomark.svg";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={MedicLogo} alt="Medic Logo" className="home-logo" />
        <h1>Welcome to Medic</h1>
        <p>Your personal health companion app.</p>
        <div className="home-buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Login</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
