import React, { useState, useEffect } from "react";
import "./ActivityPage.css";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Activity() {
  const [activityLog, setActivityLog] = useState([]);
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [currentDate] = useState(new Date());

  useEffect(() => {
    const storedLog = JSON.parse(localStorage.getItem("activityLog")) || [];
    setActivityLog(storedLog);

    // Assuming appointments are stored in localStorage "patients"
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatientAppointments(patients);
  }, []);

  const clearActivity = () => {
    localStorage.removeItem("activityLog");
    setActivityLog([]);
  };

  // Extract unique days in current month that have appointments or activity
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Days with activity
  const activityDays = new Set(
    activityLog
      .filter((act) => {
        const date = new Date(act.timestamp);
        return date.getFullYear() === year && date.getMonth() === month;
      })
      .map((act) => new Date(act.timestamp).getDate())
  );

  // Days with appointments
  patientAppointments.forEach((apt) => {
    if (apt.appointmentDate) {
      const d = new Date(apt.appointmentDate);
      if (d.getFullYear() === year && d.getMonth() === month) {
        activityDays.add(d.getDate());
      }
    }
  });

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  // Generate calendar grid with blanks for days before 1st
  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  // Upcoming tasks: next 5 upcoming appointments sorted by date
  const today = new Date();
  const upcomingTasks = patientAppointments
    .filter((apt) => {
      const aptDate = new Date(apt.appointmentDate);
      return aptDate >= today;
    })
    .sort(
      (a, b) =>
        new Date(a.appointmentDate).getTime() -
        new Date(b.appointmentDate).getTime()
    )
    .slice(0, 5);

  return (
    <div className="activity-container">
      <h2>Activity Log</h2>
      <button className="clear-btn" onClick={clearActivity}>
        Clear History
      </button>

      <div className="activity-main-grid">
        {/* Calendar */}
        <div className="calendar">
          <div className="calendar-header">
            <span className="month-year">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="calendar-weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((wd) => (
              <div key={wd} className="weekday">
                {wd}
              </div>
            ))}
          </div>
          <div className="calendar-days">
            {calendarCells.map((day, idx) =>
              day ? (
                <div
                  key={idx}
                  className={`day-cell ${
                    activityDays.has(day) ? "active-day" : ""
                  }`}
                >
                  {day}
                </div>
              ) : (
                <div key={idx} className="day-cell empty-cell"></div>
              )
            )}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="upcoming-tasks">
          <h3>Upcoming Tasks</h3>
          {upcomingTasks.length === 0 ? (
            <ul>
              <li>
                <strong>Team Meeting</strong> - Tomorrow at 10:00 AM
              </li>
              <li>
                <strong>Project Deadline</strong> - In 3 days
              </li>
              <li>
                <strong>Code Review</strong> - Next Monday at 2:00 PM
              </li>
            </ul>
          ) : (
            <ul>
              {upcomingTasks.map((task) => (
                <li key={task.id}>
                  <strong>
                    {task.firstName} {task.lastName}
                  </strong>{" "}
                  - {new Date(task.appointmentDate).toLocaleDateString()} at{" "}
                  {task.appointmentTime}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Activity Log List */}
      {activityLog.length === 0 ? (
        <p className="no-activity">No activity logged yet.</p>
      ) : (
        <ul className="activity-list">
          {activityLog.map((activity, index) => (
            <li
              key={index}
              className={`activity-item ${activity.type.toLowerCase()}`}
            >
              <span className="message">{activity.message}</span>
              <span className="time">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
