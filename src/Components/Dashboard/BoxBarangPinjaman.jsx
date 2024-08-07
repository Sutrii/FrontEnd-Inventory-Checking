import React from "react";
import { CiGrid41 } from "react-icons/ci";

const BarangPinjaman = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Barang Pinjaman</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <CiGrid41 className="text-black" />
        </div>
      </div>
      <h1 className="text-gray-600 text-3xl mb-3">7</h1>
      <p className="text-gray-600">Total Masuk</p>
    </div>
  );
};

export default BarangPinjaman;
