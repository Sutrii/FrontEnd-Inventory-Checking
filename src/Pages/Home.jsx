import React from "react";
import NavigationBar from "../Components/Navbar";
import backgroundImage from "../assets/img/peti kemas.jpg";
import logo from "../assets/img/logo-pelindo.png"; // Adjust the path to your logo

const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        color: "white",
        padding: "20px",
        opacity: "80%"
      }}
    >
      <NavigationBar />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 60px)", // Adjust this to move content up
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1>Inventory Dashboard</h1>
          <p>Divisi Teknologi Informasi</p>
          <p>PT Pelindo Multi Terminal</p>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <form
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={logo}
              alt="PELINDO logo"
              style={{ height: "40px", width: "auto", display: "block", margin: "0 auto" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px", color: "#000" }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px", color: "#000" }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", alignItems: "center", color: "#000" }}>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                style={{ marginRight: "8px" }}
              />
              Remember me
            </label>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#222E3C",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
