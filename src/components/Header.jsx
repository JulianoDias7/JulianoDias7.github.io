import React from 'react'
import { FaFingerprint } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
  return (
    <nav className="navbar navbar-light bg-light shadow mb-2">
      <div className=" d-flex container">

        <FaFingerprint style={{ width: '50px', height: '50px' }} />
        <span className="navbar-brand mx-auto"><h2>ERPVendas+</h2></span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="justify-content-end navbar-nav list-group list-group-horizontal ">
            <li className="nav-item">
              <NavLink className="nav-link me-3" to="/" end>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link me-3" to="/rh">
                RH
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link me-3" to="/estoque">
                Estoque
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header