import React, { useState } from "react";
import NavigationBar from "../Components/Navbar";
import backgroundImage from "../assets/img/peti kemas.jpg";
import logo from "../assets/img/logo-pelindo.png";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative h-[100vh] w-[100vw] overflow-hidden text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <NavigationBar />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full tracking-wide">
        <div className="flex-1 text-center">
          <h1 className="poppins-semibold text-4xl">Inventory Dashboard</h1>
          <div className="pt-4 poppins-regular text-2xl space-y-1">
            <p>Divisi Teknologi Informasi</p>
            <p>PT Pelindo Multi Terminal</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form className="bg-white px-4 py-5 rounded-lg shadow-lg w-[80%] max-w-md">
            <div className="text-center mb-4">
              <img
                src={logo}
                alt="PELINDO logo"
                className="h-10 w-auto mx-auto"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-black">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-lg text-black"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block mb-2 text-black">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full p-2 border rounded-lg text-black pr-10"
              />
              <button
                type="button"
                className="absolute right-0 px-3 py-2"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-black"
                />
              </button>
            </div>
            <div className="mb-4">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="mr-2"
                />
                Remember me
              </label>
            </div>
            <div className="text-center">
              <NavLink to={Dashboard}>
                <button
                  type="submit"
                  className="bg-[#222E3C] text-white px-4 py-2 rounded-lg"
                >
                  Login
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
