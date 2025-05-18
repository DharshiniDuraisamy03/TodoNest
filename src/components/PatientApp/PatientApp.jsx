import React, { useState, useEffect } from "react";
import PatientRegistration from "./PatientRegistration";
import AppointmentTable from "./AppointmentTable";

function PatientApp() {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    const newPatient = {
      id: Date.now(),
      ...patient,
      status: patient.status || "Pending",
    };

    setPatients((prev) => [...prev, newPatient]);
  };

  const updatePatient = (updatedPatient) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  const deletePatient = (id) => {
    setPatients((prev) => prev.filter((patient) => patient.id !== id));
  };

  return (
    <>
      <PatientRegistration onAddPatient={addPatient} />
      <AppointmentTable
        patients={patients}
        onUpdatePatient={updatePatient}
        onDeletePatient={deletePatient}
      />
    </>
  );
}

export default PatientApp;
