import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
