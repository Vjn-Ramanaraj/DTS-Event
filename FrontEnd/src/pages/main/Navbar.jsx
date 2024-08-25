import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './assets/css/style-starter.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("faceAuth"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("faceAuth");
    setIsLoggedIn(false); // Update state to reflect the logged-out status
    navigate("/"); // Redirect to the home page or login page
  };

  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              DTS<span></span>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="navbar-collapse">
              <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {isLoggedIn ? (
                    <button className="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <Link className="nav-link" to="/user-select">
                      Login
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Activity
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
