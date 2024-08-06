import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard Pages/Dashboard";
import Home from "./Pages/Home";
import TabelBarangMasuk from "./Pages/Dashboard Pages/TabelBarangMasuk";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tabel-barang-masuk" element={<TabelBarangMasuk />} />
    </Routes>
  );
}

export default Routers;
