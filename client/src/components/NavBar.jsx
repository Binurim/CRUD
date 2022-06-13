import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Movie Reviews
                </NavLink>
            </li>
            <li className="nav-item active  mr-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;
