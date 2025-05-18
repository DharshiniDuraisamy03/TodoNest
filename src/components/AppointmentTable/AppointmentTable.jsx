import React, { useState } from "react";
import "./AppointmentTable.css";
import editIcon from "../../assets/edit-01.svg";
import deleteIcon from "../../assets/Button.svg";

export default function AppointmentTable({ patients }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentAppointments = patients.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(patients.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    alert(`Edit ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete ${id}`);
  };

  return (
    <>
      <h2>Appointments</h2>
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Patient Id</th>
              <th>Patient Name</th>
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
            {currentAppointments.map(
              ({
                id,
                firstName,
                lastName,
                dob,
                number,
                appointmentDate,
                appointmentTime,
                status,
                doctor,
                department,
                notes,
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td className="namecol">{`${firstName} ${lastName}`}</td>
                  <td>{dob}</td>
                  <td>{number}</td>
                  <td>{appointmentDate}</td>
                  <td>{appointmentTime}</td>
                  <td>{status}</td>
                  <td>{doctor}</td>
                  <td>{department}</td>
                  <td>{notes}</td>
                  <td className="action">
                    <div className="action-buttons">
                      <img
                        src={editIcon}
                        alt="Edit"
                        onClick={() => handleEdit(id)}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        onClick={() => handleDelete(id)}
                      />
                    </div>
                  </td>
                </tr>
              )
            )}
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
    </>
  );
}
