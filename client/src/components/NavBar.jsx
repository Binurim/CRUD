import React from 'react';
import {NavLink} from "react-router-dom";
import "../App.css";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand">
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
              <form className="searchBar form-inline my-4 my-lg-0">
                <input
                  className="form-control search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Sign in
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">FI</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">DE</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;
