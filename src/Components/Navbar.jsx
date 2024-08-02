import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo-pelindo.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="PELINDO logo"
              style={{ height: "20px", width: "auto" }} // Adjust the height and keep the width auto
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-white mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-white mx-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white mx-3">
              Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
