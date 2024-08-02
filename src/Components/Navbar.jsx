import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo-pelindo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#222E3C",
          borderRadius: "50px",
          marginTop: "20px", // Add space above the navbar
          marginLeft: "30px", // Add space on the left
          marginRight: "30px", // Add space on the right
        }}
        variant="dark"
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home" className="d-flex align-items-start">
            <img
              src={logo}
              alt="PELINDO logo"
              style={{ height: "20px", width: "auto" }} // Adjust the height and keep the width auto
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="flex align-items-center ">
            <NavLink
              to="/home"
              className="mx-3 text-white poppins-regular text-xs"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="mx-3 text-white poppins-regular text-xs"
            >
              About Us
            </NavLink>
            <NavLink
              to="/sign-in"
              className="mx-3 text-white poppins-regular text-xs"
            >
              Sign In
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
