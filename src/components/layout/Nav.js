import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function signout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <Navbar expand="md" sticky="top">
      <NavLink to="/" exact>
        <Navbar.Brand>
          <img className="navbar__logo" src={logo} alt="Logo" />
        </Navbar.Brand>
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

          {auth ? (
            <>
              <NavLink to="/admin" className="nav-link">
                admin
              </NavLink>
              <Button className="signout-btn" onClick={signout}>
                sign out
                <i class="fas fa-sign-out-alt icon"></i>
              </Button>
            </>
          ) : (
            <NavLink to="/login" className="nav-link">
              login
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
