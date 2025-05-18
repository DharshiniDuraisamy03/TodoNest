import React from "react";
import "./Activity.css";

const activities = [
  {
    time: "6:00 AM - 7:00 AM",
    title: "Exercise",
    description: "Morning workout to energize your day.",
    img: "https://cdn-icons-png.flaticon.com/512/2933/2933182.png",
  },
  {
    time: "7:30 AM - 8:30 AM",
    title: "Breakfast & Family Time",
    description: "Enjoy breakfast and quality time with family.",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    time: "9:00 AM - 12:00 PM",
    title: "Work",
    description: "Focus on project tasks and meetings.",
    img: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Lunch Break",
    description: "Take a break and refuel for the afternoon.",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
  },
  {
    time: "1:30 PM - 3:00 PM",
    title: "Meeting",
    description: "Team sync-up and planning.",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921820.png",
  },
  {
    time: "3:30 PM - 5:00 PM",
    title: "Project Work",
    description: "Deep focus on development and coding.",
    img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    time: "6:00 PM - 8:00 PM",
    title: "Family Time & Dinner",
    description: "Relax and enjoy dinner with loved ones.",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046783.png",
  },
  {
    time: "8:00 PM - 9:00 PM",
    title: "Reading Time",
    description: "Unwind with a good book before bed.",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046790.png", // book icon
  },
];

// Helper: split array into chunks of 2
function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function Activity() {
  const activityPairs = chunkArray(activities, 2);

  return (
    <div className="activity-page">
      <h2>Daily Activities</h2>
      <div className="activities-row-list">
        {activityPairs.map((pair, idx) => (
          <div key={idx} className="activities-row">
            {pair.map((activity, index) => (
              <div key={index} className="activity-card">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="activity-icon"
                />
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p className="time">{activity.time}</p>
                  <p className="description">{activity.description}</p>
                </div>
              </div>
            ))}
            {/* For odd number of activities, fill empty space */}
            {pair.length === 1 && (
              <div className="activity-card empty-card"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
