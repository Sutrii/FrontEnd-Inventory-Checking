import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const InputName = ({ label, placeholder, value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const location = useLocation();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/barang-masuk") {
      console.log("Submitting to Barang Masuk database:", inputValue);
      onSubmit(inputValue, "barangMasuk");
    } else if (location.pathname === "/barang-keluar") {
      console.log("Submitting to Barang Keluar database:", inputValue);
      onSubmit(inputValue, "barangKeluar");
    } else {
      console.log("Submitting to default:", inputValue);
      onSubmit(inputValue, "default");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto p-3 bg-white shadow-md rounded-2xl space-y-3"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">{label || "Item Name"}</h2>
      </div>
      <div id="InputForm">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          id="text"
          name="nama_barang"
          placeholder={placeholder || "Input Item Name"}
          className="poppins-regular text-xs w-full h-8 p-1 border rounded-lg text-[#919191]"
          style={{ color: "black" }}
          required
        />
      </div>
    </form>
  );
};

export default InputName;
