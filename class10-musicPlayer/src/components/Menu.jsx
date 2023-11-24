import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-md bg-success navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to={'/'}>
          MUSIC PLAYER
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                          <NavLink className="nav-link" to={"/"}>
                Music
              </NavLink>
            </li>
            <li className="nav-item">
                          <NavLink className="nav-link" to={"/track"}>
                Track
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
