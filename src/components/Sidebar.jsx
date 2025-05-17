import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <nav>
        <ul>
          <li className={isActive("/dashboard") ? "active" : ""}>
            <Link to="/dashboard">📊 Dashboard</Link>
          </li>
          <li className={isActive("/home") ? "active" : ""}>
            <Link to="/home">🏠 Home</Link>
          </li>
          <li className={isActive("/register-patient") ? "active" : ""}>
            <Link to="/register-patient">➕ Patient Registration</Link>
          </li>
          <li className={isActive("/sql-query") ? "active" : ""}>
            <Link to="/sql-query">💾 Raw SQL Query</Link>
          </li>
          <li className={isActive("/tab-sync") ? "active" : ""}>
            <Link to="/tab-sync">🔄 Tab Sync</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
