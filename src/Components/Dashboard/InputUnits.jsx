import React from "react";

const InputUnits = () => {
  return (
    <div className="w-full h-auto p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Item Units</h2>
      </div>
      <div id="InputForm">
        <input
          formMethod="post"
          type="text"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          id="text"
          name="satuan"
          placeholder="Input Item Units"
          className="poppins-regular text-xs w-full h-8 p-1 border rounded-lg text-[#919191]"
          style={{ color: "black" }}
          required
        />
      </div>
    </div>
  );
};

export default InputUnits;
