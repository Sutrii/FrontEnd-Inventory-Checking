import React, { useState } from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import TblBarangMasuk from "../../Components/Dashboard/TblBarangMasuk";
import logoPelindo from "../../assets/img/logo-pelindo.png";

const TabelBarangMasuk = () => {
  const [search, setSearch] = useState("");

  const handleExportPDF = () => {
    // Tambahkan logika untuk mengekspor PDF di sini
  };

  return (
    <div
      id="DashboardParent"
      className="w-screen h-full flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-[15%] h-auto lg:h-screen fixed lg:static top-0 left-0 z-10 bg-gray-100 lg:bg-transparent">
        <SidebarDashboard />
      </div>
      <div className="w-full lg:w-[85%] h-auto lg:h-screen flex flex-col">
        <div
          id="DashboardHeader"
          className="fixed lg:static top-0 right-0 z-10 w-full h-[10%] bg-white"
        >
          <NavbarDashboard />
        </div>
        <div className="flex flex-col bg-[#F4F6FA] w-full h-auto lg:h-full p-2 mt-16 lg:mt-0">
          <div className="flex w-full px-4 py-2 rounded-xl">
            <div className="flex w-full justify-between items-center bg-white rounded-xl shadow-md p-4">
              <img src={logoPelindo} alt="Logo Pelindo" className="h-6" />
              <h1 className="text-xl poppins-semibold uppercase text-center lg:text-left tracking-widest">
                Tabel Barang Masuk
              </h1>
              <button
                onClick={handleExportPDF}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                Export PDF
              </button>
            </div>
          </div>
          <TblBarangMasuk />
        </div>
      </div>
    </div>
  );
};

export default TabelBarangMasuk;
