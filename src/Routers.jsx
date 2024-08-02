import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routers;
