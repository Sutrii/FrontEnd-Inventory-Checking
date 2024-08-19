import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import logoPelindo from "../assets/img/logo-pelindo.png";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { FiSquare } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { VscListFlat } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";

const SidebarDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Update activeTab based on the current route
    const path = location.pathname;
    if (path.includes("dashboard")) setActiveTab("dashboard");
    else if (path.includes("tabel-barang-masuk")) setActiveTab("barangMasuk");
    else if (path.includes("tabel-barang-keluar")) setActiveTab("barangKeluar");
    else if (path.includes("tabel-barang-pinjaman"))
      setActiveTab("barangPinjaman");
    else if (path.includes("tabel-barang-rusak")) setActiveTab("barangRusak");
    else if (path.includes("input-barang-masuk"))
      setActiveTab("barangMasukInv");
    else if (path.includes("input-barang-keluar"))
      setActiveTab("barangKeluarInv");
    else if (path.includes("input-barang-pinjaman"))
      setActiveTab("barangPinjamanInv");
    else if (path.includes("input-barang-rusak"))
      setActiveTab("barangRusakInv");
    else if (path.includes("tabel-inventory")) setActiveTab("inputInventory");
    else if (path.includes("input-barang")) setActiveTab("inputBarangInv");
    else if (path.includes("social-media")) setActiveTab("socialMedia");
    else if (path.includes("logout")) setActiveTab("logout");
  }, [location]);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Menghapus token atau data sesi dari localStorage
    localStorage.removeItem("authToken");

    // Arahkan pengguna kembali ke halaman login
    navigate("/login");
  };

  return (
    <div
      id="SidebarParent"
      className="w-full h-screen bg-[#222E3C] border border-black p-3"
    >
      <div id="InsideParent" className="flex flex-col w-full h-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src={logoPelindo}
            alt="Pelindo Logo"
            className="h-8 w-auto mb-2 mt-2"
          />
        </div>
        {/* Reports Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            Reports
          </span>
        </div>
        <NavLink to="/dashboard">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "dashboard" ? "text-white" : "text-[#919191]"
            }`}
          >
            <GiSettingsKnobs
              className={`text-base mr-2 ${
                activeTab === "dashboard" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "dashboard" ? "text-white" : "text-[#919191]"
              }`}
            >
              Dashboard
            </span>
          </div>
        </NavLink>
        {/* Summary Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            Summary
          </span>
        </div>
        <NavLink to="/tabel-barang-masuk">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Masuk
            </span>
          </div>
        </NavLink>
        <NavLink to="/tabel-barang-keluar">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Keluar
            </span>
          </div>
        </NavLink>
        <NavLink to="/tabel-barang-pinjaman">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Pinjaman
            </span>
          </div>
        </NavLink>
        <NavLink to="/tabel-barang-rusak">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Rusak
            </span>
          </div>
        </NavLink>
        <NavLink to="/tabel-inventory">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Inventory
            </span>
          </div>
        </NavLink>
        {/* Inventories Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            Inventories
          </span>
        </div>
        <NavLink to="/input-barang-masuk">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            <FiSquare
              className={`text-base mr-2 ${
                activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
              }`}
            >
              Barang Masuk
            </span>
          </div>
        </NavLink>
        <NavLink to="/input-barang-keluar">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangKeluarInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            <TbCheckbox
              className={`text-base mr-2 ${
                activeTab === "barangKeluarInv"
                  ? "text-white"
                  : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangKeluarInv"
                  ? "text-white"
                  : "text-[#919191]"
              }`}
            >
              Barang Keluar
            </span>
          </div>
        </NavLink>
        <NavLink to="/input-barang-pinjaman">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangPinjamanInv"
                ? "text-white"
                : "text-[#919191]"
            }`}
          >
            <CiGrid41
              className={`text-base mr-2 ${
                activeTab === "barangPinjamanInv"
                  ? "text-white"
                  : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangPinjamanInv"
                  ? "text-white"
                  : "text-[#919191]"
              }`}
            >
              Barang Pinjaman
            </span>
          </div>
        </NavLink>
        <NavLink to="/input-barang-rusak">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            <VscListFlat
              className={`text-base mr-2 ${
                activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
              }`}
            >
              Barang Rusak
            </span>
          </div>
        </NavLink>
        <NavLink to="/input-barang">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            <VscListFlat
              className={`text-base mr-2 ${
                activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
              }`}
            >
              Input Barang
            </span>
          </div>
        </NavLink>
        {/* About Us Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            About Us
          </span>
        </div>
        <a
          href="https://www.instagram.com/pelindomultiterminal?igsh=MXhmN2VsOHRpMWJuNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
          }`}
        >
          <FaInstagram
            className={`text-base mr-2 ${
              activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
            }`}
          >
            Social Media
          </span>
        </a>
        {/* Log Out Section */}
        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "logout" ? "text-white" : "text-[#919191]"
          }`}
          onClick={handleLogout}
        >
          <MdOutlineLogin
            className={`text-base mr-2 ${
              activeTab === "logout" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "logout" ? "text-white" : "text-[#919191]"
            }`}
          >
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
