import React, { useState } from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import logoPelindo from "../../assets/img/logo-pelindo.png";
import TblBarangPinjaman from "../../Components/Dashboard/TblBarangPinjaman";

const TabelBarangPinjaman = () => {
  const [search, setSearch] = useState("");

  const handleExportPDF = () => {
    // Tambahkan logika untuk mengekspor PDF di sini
  };

  return (
    <div id="DashboardParent" className="w-screen flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-[10%]"
      >
        <NavbarDashboard />
        <div id="DashboardContent" className="flex flex-row">
          <div className="flex flex-row bg-gray-100 w-full h-screen p-4">
            <div id="TableHeader" className="w-full">
              <div className="flex w-full justify-between items-center bg-white rounded-xl shadow-md p-4">
                <img src={logoPelindo} alt="Logo Pelindo" className="h-6" />
                <h1 className="text-xl poppins-semibold uppercase text-center lg:text-left tracking-widest">
                  Tabel Barang Pinjaman
                </h1>
                <button
                  onClick={handleExportPDF}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl"
                >
                  Export PDF
                </button>
              </div>
              <TblBarangPinjaman />
            </div>
          </div>
        </div>
      </div>
      <div
        id="DashboardSidebar"
        className="w-[15%] h-screen fixed top-0 left-0 z-10"
      >
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default TabelBarangPinjaman;
