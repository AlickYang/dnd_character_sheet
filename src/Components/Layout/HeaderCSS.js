import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <a className="navbar-brand" href="/Home">
          My D&D Character Tracker
        </a>
        <div className="navbar-container">
          >
          <ul className="navbar-container">
            <li className="nav-item">
              <a className="nav-link" href="/Character">
                Character
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Button">
                Button
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
