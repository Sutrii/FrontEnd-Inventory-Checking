import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const NavbarDashboard = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogout = () => {
    // Menghapus token atau data sesi dari localStorage
    localStorage.removeItem("authToken");

    // Arahkan pengguna kembali ke halaman login
    navigate("/login");
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/tabel-inventory":
        return "Tabel Inventaris";
      case "/input-barang":
        return "Input Inventaris";
      case "/notification":
        return "Tabel Sisa Masa Barang Pinjaman";
      default:
        return "Dashboard";
    }
  };
  return (
    <div id="NavbarParent" className="w-full h-full bg-white p-3">
      <div
        id="InsideParent"
        className="flex w-full h-full justify-between items-center"
      >
        <div
          id="TitleSection"
          className="flex items-center w-full sm:w-[45%] h-full pl-3"
        >
          <span className="uppercase poppins-semibold text-lg sm:text-xl tracking-widest">
            {getTitle()}
          </span>
        </div>
        <div id="IconSection" className="flex items-center ml-auto mx-2 h-full">
          <button
            className="bg-[#F0134D] w-[100px] px-2 py-2 rounded-3 text-white flex items-center justify-center space-x-2"
            onClick={handleLogout}
          >
            <div>
              <span className="poppins-regular text-sm">Logout</span>
            </div>
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
