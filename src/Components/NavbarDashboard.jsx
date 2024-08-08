import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCog } from "@fortawesome/free-solid-svg-icons";

const NavbarDashboard = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/tabel-barang-masuk":
        return "Tabel Barang Masuk";
      case "/tabel-barang-keluar":
        return "Tabel Barang Keluar";
      case "/tabel-barang-pinjaman":
        return "Tabel Barang Pinjaman";
      case "/tabel-barang-rusak":
        return "Tabel Barang Rusak";
      case "/input-barang-masuk":
        return "Input Barang Masuk";
      case "/input-barang-keluar":
        return "Input Barang Keluar";
      case "/input-barang-pinjaman":
        return "Input Barang Pinjaman";
      case "/input-barang-rusak":
        return "Input Barang Rusak";
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
        <div
          id="IconSection"
          className="flex items-center space-x-3 ml-auto w-auto h-full"
        >
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-black cursor-pointer text-sm sm:text-base"
            />
          </div>
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon
              icon={faCog}
              className="text-black cursor-pointer text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
