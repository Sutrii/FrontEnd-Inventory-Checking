import React from "react";
import { CiGrid41 } from "react-icons/ci";

const TotalBarang = () => {
  return (
    <div className="flex flex-wrap gap-3 w-full">
      <div
        className="w-full sm:w-1/2 lg:w-1/5 p-4 bg-white shadow-md rounded-3xl"
        style={{ width: "41.5%" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total Barang Keseluruhan</h2>
          <div className="bg-[#EBB64D] p-2 rounded-2xl">
            <CiGrid41 className="text-black" />
          </div>
        </div>
        <h1 className="text-gray-600 text-3xl mb-3">21</h1>
        <p className="text-gray-600">Dari Keseluruhan Jenis Barang</p>
      </div>
    </div>
  );
};

export default TotalBarang;