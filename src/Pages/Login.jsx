import React from "react";
import NavigationBar from "../Components/Navbar";
import backgroundImage from "../assets/img/peti kemas.jpg";
import logo from "../assets/img/logo-pelindo.png";

const Login = () => {
  return (
    <div
      className="relative p-[20px] h-[100vh] w-[100vw] overflow-hidden text-white"
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
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex-1 text-center p-[20px] tracking-wide">
          <h1 className="poppins-semibold text-4xl">Inventory Dashboard</h1>
          <div className="pt-4 poppins-regular text-2xl space-y-1">
            <p>Divisi Teknologi Informasi</p>
            <p>PT Pelindo Multi Terminal</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-[20px]">
          <form className="bg-white p-5 rounded-lg shadow-lg w-[80%] max-w-md">
            <div className="text-center mb-5">
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
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-black">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-lg text-black"
              />
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
              <button
                type="submit"
                className="bg-[#222E3C] text-white px-4 py-2 rounded-lg"
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

export default Login;
