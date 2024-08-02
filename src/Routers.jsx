import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
}

export default Routers;
