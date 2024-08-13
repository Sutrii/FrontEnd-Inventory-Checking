import React from "react";
import { VscListFlat } from "react-icons/vsc";

const BarangRusak = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Barang Rusak</h2>
        <div className="bg-[#F0134D] p-2 rounded-2xl">
          <VscListFlat className="text-black" />
        </div>
      </div>
      <h1 className="text-gray-600 text-3xl mb-3">0</h1>
      <p className="text-m font-semibold" style={{ color: "#F0134D" }}>
        Total Masuk
      </p>
    </div>
  );
};

export default BarangRusak;
