import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard Pages/Dashboard";
import Home from "./Pages/Home";
import TabelBarangMasuk from "./Pages/Dashboard Pages/TabelBarangMasuk";
import TabelBarangKeluar from "./Pages/Dashboard Pages/TabelBarangKeluar";
import TabelBarangPinjaman from "./Pages/Dashboard Pages/TabelBarangPinjaman";
import TabelBarangRusak from "./Pages/Dashboard Pages/TabelBarangRusak";
import BarangMasuk from "./Pages/Dashboard Pages/BarangMasuk";
import BarangKeluar from "./Pages/Dashboard Pages/BarangKeluar";
import BarangPinjaman from "./Pages/Dashboard Pages/BarangPinjaman";
import BarangRusak from "./Pages/Dashboard Pages/BarangRusak";
import AboutUs from "./Pages/AboutUs";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tabel-barang-masuk" element={<TabelBarangMasuk />} />
      <Route path="/tabel-barang-keluar" element={<TabelBarangKeluar />} />
      <Route path="/tabel-barang-pinjaman" element={<TabelBarangPinjaman />} />
      <Route path="/tabel-barang-rusak" element={<TabelBarangRusak />} />
      <Route path="/input-barang-masuk" element={<BarangMasuk />} />
      <Route path="/input-barang-keluar" element={<BarangKeluar />} />
      <Route path="/input-barang-pinjaman" element={<BarangPinjaman />} />{" "}
      <Route path="/input-barang-rusak" element={<BarangRusak />} />
    </Routes>
  );
}

export default Routers;
