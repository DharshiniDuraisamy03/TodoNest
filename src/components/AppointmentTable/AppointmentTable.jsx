import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AppointmentTable.css";
import editIcon from "../../assets/edit-01.svg";
import deleteIcon from "../../assets/Button.svg";

export default function AppointmentTable({ patients }) {
  const [patientList, setPatientList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editPatient, setEditPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [randomTip, setRandomTip] = useState("");

  const rowsPerPage = 8;
  const navigate = useNavigate();

  const tips = [
    "Stay hydrated during your appointments!",
    "Regular health checkups keep you fit.",
    "Smile, it's your best accessory today!",
    "Book early to avoid last-minute rush!",
    "Prioritize your health like you do your work!",
  ];

  useEffect(() => {
    const storedPatients = localStorage.getItem("patients");
    if (storedPatients) {
      setPatientList(JSON.parse(storedPatients));
    } else {
      setPatientList(patients);
      localStorage.setItem("patients", JSON.stringify(patients));
    }
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
  }, [patients]);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patientList));
  }, [patientList]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const totalPages = Math.ceil(patientList.length / rowsPerPage);

  const filteredAppointments = patientList
    .filter(
      (appointment) =>
        appointment.firstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (patient) => {
    setEditPatient(patient);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      const updatedList = patientList.filter((patient) => patient.id !== id);
      setPatientList(updatedList);
      toast.success("Appointment deleted!");
    }
  };

  const handleSave = (updatedPatient) => {
    const updatedList = patientList.map((patient) =>
      patient.id === updatedPatient.id ? updatedPatient : patient
    );
    setPatientList(updatedList);
    setEditPatient(null);
    toast.success("Appointment updated!");
  };

  const handleAddPatient = () => {
    navigate("/register-patient");
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="tip-banner">{randomTip}</div>

      <div className="header-container">
        <h2>Appointments</h2>
        <button className="add-patient-btn" onClick={handleAddPatient}>
          + Add Patient
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by Name or Doctor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="appointment-card">
        <div className="table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Notes</th>
                <th className="action">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="namecol">
                    {appointment.firstName} {appointment.lastName}
                  </td>
                  <td>{appointment.dob}</td>
                  <td>{appointment.number}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>
                    <span
                      className={`status-badge ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.department}</td>
                  <td>{appointment.notes}</td>
                  <td className="action">
                    <div className="action-buttons">
                      <img
                        src={editIcon}
                        alt="Edit"
                        onClick={() => handleEdit(appointment)}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        onClick={() => handleDelete(appointment.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            )
          )}
        </div>
      </div>

      {editPatient && (
        <div className="edit-card">
          <h3>Edit Appointment</h3>
          <div className="form-group">
            <input
              type="text"
              value={editPatient.firstName}
              onChange={(e) =>
                setEditPatient({ ...editPatient, firstName: e.target.value })
              }
              placeholder="First Name"
            />
            <input
              type="text"
              value={editPatient.lastName}
              onChange={(e) =>
                setEditPatient({ ...editPatient, lastName: e.target.value })
              }
              placeholder="Last Name"
            />
            <input
              type="text"
              value={editPatient.dob}
              onChange={(e) =>
                setEditPatient({ ...editPatient, dob: e.target.value })
              }
              placeholder="Date of Birth"
            />
            <input
              type="text"
              value={editPatient.number}
              onChange={(e) =>
                setEditPatient({ ...editPatient, number: e.target.value })
              }
              placeholder="Phone Number"
            />
            <input
              type="date"
              value={editPatient.appointmentDate}
              onChange={(e) =>
                setEditPatient({
                  ...editPatient,
                  appointmentDate: e.target.value,
                })
              }
            />
            <input
              type="time"
              value={editPatient.appointmentTime}
              onChange={(e) =>
                setEditPatient({
                  ...editPatient,
                  appointmentTime: e.target.value,
                })
              }
            />
            <select
              value={editPatient.status}
              onChange={(e) =>
                setEditPatient({ ...editPatient, status: e.target.value })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input
              type="text"
              value={editPatient.doctor}
              onChange={(e) =>
                setEditPatient({ ...editPatient, doctor: e.target.value })
              }
              placeholder="Doctor"
            />
            <input
              type="text"
              value={editPatient.department}
              onChange={(e) =>
                setEditPatient({ ...editPatient, department: e.target.value })
              }
              placeholder="Department"
            />
            <textarea
              value={editPatient.notes}
              onChange={(e) =>
                setEditPatient({ ...editPatient, notes: e.target.value })
              }
              placeholder="Notes"
            />
          </div>
          <div className="form-actions">
            <button
              className="save-btn"
              onClick={() => handleSave(editPatient)}
            >
              Save
            </button>
            <button className="cancel-btn" onClick={() => setEditPatient(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
