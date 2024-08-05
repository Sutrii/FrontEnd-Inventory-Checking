import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo-pelindo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  // Determine the active path
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      style={{
        backgroundColor: "#222E3C",
        borderRadius: "50px",
        marginTop: "20px",
        marginLeft: "30px",
        marginRight: "30px",
        position: "relative", 
      }}
      variant="dark"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-start">
          <img
            src={logo}
            alt="PELINDO logo"
            style={{ height: "20px", width: "auto" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="flex align-items-center" style={{ position: "relative" }}>
          {["/home", "/about", "/auth"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className="mx-3 poppins-regular text-xs"
              style={{
                color: isActive(path) ? "white" : "#919191",
                position: "relative",
                textDecoration: "none",
              }}
            >
              {path === "/home" ? "Home" : path === "/about" ? "About Us" : "Sign In"}
              {isActive(path) && (
                <span
                  style={{
                    position: "absolute",
                    top: 15,
                    height: "100%",
                    width: "50px",
                    borderBottom: "3px solid #3B7DDD",
                    background: "linear-gradient(0deg, #25364D 0%, #25364D 200%, transparent 100%)",
                    transition: "0.5s",
                    pointerEvents: "none",
                    filter: "drop-shadow(0 15px 45px #25364D)",
                    left: "-5px", //
                  }}
                />
              )}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
