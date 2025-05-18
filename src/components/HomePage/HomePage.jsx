import React from "react";
import dashboardImage from "../../assets/dashboardImage.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card14.png";

function Home() {
  return (
    <div className="dashboard-container">
      <h1>
        Complete Healthcare
        <span className="purple-text"> for Every Need</span>
      </h1>

      <h2>
        Expert medical care designed to keep you and your family happy, and
        safe.
      </h2>

      <img
        src={dashboardImage}
        alt="Dashboard Visual"
        className="dashboard-image"
      />

      <h1>Expert Medical Care for You & Your Family</h1>

      <h2>
        From routine checkups to specialized treatments, we provide expert
        healthcare solutions.
      </h2>

      <div className="dashboard-cards">
        <div className="card">
          <img src={card1} alt="Patients" className="card-image" />
          <h2>Patients</h2>
          <p>View and manage patient details.</p>
        </div>
        <div className="card">
          <img src={card2} alt="Appointments" className="card-image" />
          <h2>Appointments</h2>
          <p>Check upcoming appointments.</p>
        </div>
        <div className="card">
          <img src={card3} alt="Reports" className="card-image" />
          <h2>Reports</h2>
          <p>Access medical reports and records.</p>
        </div>
        <div className="card">
          <img src={card4} alt="Reports" className="card-image" />
          <h2>Reports</h2>
          <p>Access medical reports and records.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
