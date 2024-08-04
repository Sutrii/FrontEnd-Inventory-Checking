import React, { useState } from "react";
import NavigationBar from "../Components/Navbar";
import backgroundImage from "../assets/img/peti kemas.jpg";
import logo from "../assets/img/logo-pelindo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
    }
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="text-center mb-6 md:mb-0 md:w-1/2 md:ml-12 md:mt-[-5%]">
          <h1 className="poppins-semibold text-2xl md:text-3xl uppercase font-bold mb-1 tracking-widest">
            Inventory Dashboard
          </h1>
          <h1 className="poppins-semibold text-2xl md:text-3xl uppercase font-bold mb-1 tracking-widest">
            Divisi Teknologi Informasi
          </h1>
          <h1 className="poppins-semibold text-2xl md:text-3xl uppercase font-bold tracking-widest">
            PT Pelindo Multi Terminal
          </h1>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-[-5%]">
          <form onSubmit={handleLogin} className="bg-white px-4 py-6 rounded-3xl shadow-lg w-full max-w-sm">
            <div className="text-center mb-6">
              <img
                src={logo}
                alt="PELINDO logo"
                className="h-8 w-auto mx-auto"
                style={{ marginTop: '0.5rem' }} // Menurunkan posisi logo
              />
              <p className="text-[#919191] font-semibold mt-4">Sign in to your Inventory Dashboard</p>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-[#919191] font-semibold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg text-[#919191]"
                style={{ color: 'black' }}
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block mb-1 text-[#919191] font-semibold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded-lg text-[#919191] pr-10"
                style={{ color: 'black' }}
              />
              <button
                type="button"
                className="absolute right-1 top-10 transform -translate-y-1/2 px-3 py-2"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-[#919191]"
                />
              </button>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="mr-2"
              />
              <label htmlFor="remember-me" className="text-[#919191] font-semibold">
                Remember me
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#3B7DDD] text-white px-4 py-2 rounded-lg w-full"
              >
                Login
              </button>
            </div>
            <p className="text-red-500 text-center mt-2">
              *Hanya admin yang dapat akses
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
