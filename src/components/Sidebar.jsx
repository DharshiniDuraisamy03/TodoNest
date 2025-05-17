import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import "../App.css";
import DashboardIcon from "../assets/Dashboard.svg";
import MedicLogo from "../assets/Logomark.svg";
import Home from "../assets/home.svg";
import User from "../assets/users.svg";
import Billing from "../assets/Billing.svg";
// import DashboardIcon from "../assets/Dashboard.svg";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-card-full">
      <div className="sidebar-header">
        <img src={MedicLogo} className="sidebar-logo" alt="Medic Logo" />
        <span className="sidebar-brand">Medic</span>
      </div>

      <nav>
        <ul>
          <li className={isActive("/dashboard") ? "active" : ""}>
            <Link to="/dashboard">
              <img
                src={DashboardIcon}
                alt="Dashboard"
                className="sidebar-icon"
              />
              Dashboard
            </Link>
          </li>
          <li className={isActive("/home") ? "active" : ""}>
            <Link to="/home">
              <img src={Home} alt="Home" className="sidebar-icon" />
              Home
            </Link>
          </li>
          <li className={isActive("/tab-sync") ? "active" : ""}>
            <Link to="/appointment">
              <img
                src={DashboardIcon}
                alt="AppointmentTable"
                className="sidebar-icon"
              />
              Appointment
            </Link>
          </li>
          <li className={isActive("/register-patient") ? "active" : ""}>
            <Link to="/register-patient">
              <img
                src={User}
                alt="PatientRegistration"
                className="sidebar-icon"
              />
              Patient Registration
            </Link>
          </li>
          <li className={isActive("/sql-query") ? "active" : ""}>
            <Link to="/sql-query">
              <img src={Billing} alt="RawSQLQuery" className="sidebar-icon" />
              Raw SQL Query
            </Link>
          </li>
          <li className={isActive("/tab-sync") ? "active" : ""}>
            <Link to="/tab-sync">
              <img src={DashboardIcon} alt="TabSync" className="sidebar-icon" />
              Tab Sync
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
