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

function App() {
  return (
    <Router>
      <div className="header">
        <a href="/" target="_self" className="header-link">
          <img src={MedicLogo} className="logo react" alt="React logo" />
          <h1>Medic</h1>
        </a>
      </div>

      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register-patient" element={<PatientFormPage />} />
            <Route path="/sql-query" element={<RawQueryBox />} />
            <Route path="/tab-sync" element={<TabSync />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
