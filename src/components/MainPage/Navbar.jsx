import React from "react";
import Logo from "../../images/logo.png";
import '../../css/home.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" style={{ width: "80px" }} />
        </a>
        <h1 className="headLine" style={{color:"white"}}>SCP Group of Hospital</h1>

        
        <div className="buttons">
        <button className="nav-btn btn btn-outline-success">Sign in</button>
          <div className="dropdown">
            <button
              className="btn nav-btn btn-outline-success"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Log in
            </button>

            <ul className="dropdown-menu " >
              <li>
                <Link className="dropdown-item" to="/login">
                  A Doctor
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/patientDashBoard">
                  A Patient
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
