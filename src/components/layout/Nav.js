import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

//import { useContext } from "react";
//import AuthContext from "../../context/AuthContext";

export default function Navigation() {
  return (
    <Navbar expand="lg" sticky="top">
      <NavLink to="/" exact>
        <Navbar.Brand><img className="navbar__logo" src={logo} alt="Logo" /></Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/accommodations" className="nav-link">
            accommodations
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            contact
          </NavLink>
          <NavLink to="/login" className="nav-link">
            admin
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}