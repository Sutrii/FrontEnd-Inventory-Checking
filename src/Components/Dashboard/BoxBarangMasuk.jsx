import React from "react";
import { FiSquare } from "react-icons/fi";

const BarangMasuk = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Barang Masuk</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <FiSquare className="text-black" />
        </div>
      </div>
      <h1 className="text-gray-600 text-3xl mb-3">11</h1>
      <p className="text-gray-600">Total Masuk</p>
    </div>
  );
};

export default BarangMasuk;
