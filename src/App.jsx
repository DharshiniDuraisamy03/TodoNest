import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MedicLogo from "./assets/Logomark.svg";
import Login from "./components/LoginPage/LoginPage";
import Home from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientFormPage from "./components/PatientRegistration/PatientRegistration";
import RawQueryBox from "./components/RawQueryBox/RawQueryBox";
import TabSync from "./components/TabSync/TabSync";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar/TopNavbar"; // Add this
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";

function App() {
  return (
    <Router>
      <TopNavbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register-patient" element={<PatientFormPage />} />
            <Route path="/sql-query" element={<RawQueryBox />} />
            <Route path="/tab-sync" element={<TabSync />} />
            <Route path="/appointment" element={<AppointmentTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
