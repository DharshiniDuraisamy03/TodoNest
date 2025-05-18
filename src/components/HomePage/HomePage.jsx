import React from "react";
import dashboardImage from "../../assets/exersice.png";
import card1 from "../../assets/task.png";
import card2 from "../../assets/deadline.png";
import card3 from "../../assets/progress.png";
import card4 from "../../assets/categories.png";

function Home() {
  return (
    <div className="dashboard-container">
      <h1>
        Organize Your Day with
        <span className="purple-text"> TaskMaster</span>
      </h1>

      <h2>
        Plan, track, and accomplish your daily goals with ease and efficiency.
      </h2>

      <img
        src={dashboardImage}
        alt="Dashboard Visual"
        className="dashboard-image"
      />

      <h1>Your Personal Productivity Hub</h1>

      <h2>
        From managing daily tasks to tracking progress, streamline your workflow
        in one place.
      </h2>

      <div className="dashboard-cards">
        <div className="card">
          <img src={card1} alt="Tasks" className="card-image" />
          <h2>Tasks</h2>
          <p>Create, organize, and manage your daily to-dos.</p>
        </div>
        <div className="card">
          <img src={card2} alt="Upcoming Deadlines" className="card-image" />
          <h2>Deadlines</h2>
          <p>Stay on top of upcoming due dates and priorities.</p>
        </div>
        <div className="card">
          <img src={card3} alt="Progress Reports" className="card-image" />
          <h2>Progress</h2>
          <p>Track your task completion and productivity trends.</p>
        </div>
        <div className="card">
          <img src={card4} alt="Categories" className="card-image" />
          <h2>Categories</h2>
          <p>Organize tasks by work, personal, and custom categories.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
