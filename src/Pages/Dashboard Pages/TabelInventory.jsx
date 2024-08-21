import React, { useState } from "react";
import axios from "axios";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import logoPelindo from "../../assets/img/logo-pelindo.png";
import TblInventory from "../../Components/Dashboard/TblInventory";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const TabelInventory = ({ inventoryData }) => {
  // pastikan `inventoryData` adalah data yang dikirim sebagai props
  const [search, setSearch] = useState("");

  const handleExportExcel = async () => {
    try {
      const response = await axios.get("/inventory-export", {
        responseType: "blob", // Specify response type as blob for binary data
      });
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "inventory.xlsx");
    } catch (error) {
      console.error("Failed to export Excel:", error);
    }
  };

  return (
    <div className="w-screen flex flex-col bg-white">
      <div className="fixed top-0 right-0 z-10 w-[85%]">
        <NavbarDashboard />
      </div>
      <div className="flex overflow-y-hidden">
        <div className="absolute right-0 w-[85%]">
          <div className="h-screen">
            <div id="DashboardContent" className="flex flex-row">
              <div className="flex flex-row bg-gray-100 w-full h-screen pt-24">
                <div id="TableHeader" className="w-full px-4">
                  <div className="flex w-full justify-between items-center bg-white rounded-xl shadow-md p-4">
                    <img src={logoPelindo} alt="Logo Pelindo" className="h-6" />
                    <h1 className="text-xl poppins-semibold uppercase text-center lg:text-left tracking-widest">
                      Tabel Barang Masuk
                    </h1>
                    <button
                      onClick={handleExportExcel}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl"
                    >
                      Export Excel
                    </button>
                  </div>
                  <TblInventory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-[15%] h-screen right-0 left-0">
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default TabelInventory;
