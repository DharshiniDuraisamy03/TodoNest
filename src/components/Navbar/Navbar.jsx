import { Link } from "react-router-dom";
import MedicLogo from "../../assets/planning.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={MedicLogo} alt="Medic Logo" className="nav-logo" />
        <h2>TodoNest</h2>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
