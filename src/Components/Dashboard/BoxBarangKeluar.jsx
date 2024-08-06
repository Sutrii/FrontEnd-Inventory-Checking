import React from "react";
import { TbCheckbox } from "react-icons/tb";

const BarangKeluar = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/5 p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Barang Keluar</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <TbCheckbox className="text-black" />
        </div>
      </div>
      <h1 className="text-gray-600 text-3xl mb-3">3</h1>
      <p className="text-gray-600">Total Keluar</p>
    </div>
  );
};

export default BarangKeluar;