import React, { useState } from "react";
import "./PatientRegistration.css"; // you can rename this CSS file too later

function ActivityCreation({ onAddActivity }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    priority: "",
    category: "",
    status: "",
    assignedTo: "",
    tags: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const activityData = {
      ...formData,
      id: Date.now(),
    };

    try {
      const existingActivities =
        JSON.parse(localStorage.getItem("activities")) || [];

      existingActivities.push(activityData);

      localStorage.setItem("activities", JSON.stringify(existingActivities));

      alert("Activity added successfully!");

      if (onAddActivity) {
        onAddActivity(activityData);
      }

      setFormData({
        title: "",
        description: "",
        dueDate: "",
        dueTime: "",
        priority: "",
        category: "",
        status: "",
        assignedTo: "",
        tags: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding activity");
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Activity</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        {/* Due Date - Time */}
        <div className="form-row">
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Due Time</label>
            <input
              type="time"
              name="dueTime"
              value={formData.dueTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Priority - Category */}
        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Fitness">Fitness</option>
              <option value="Shopping">Shopping</option>
              <option value="Learning">Learning</option>
            </select>
          </div>
        </div>

        {/* Status - Assigned To */}
        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="form-group">
          <label>Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        {/* Notes */}
        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default ActivityCreation;
