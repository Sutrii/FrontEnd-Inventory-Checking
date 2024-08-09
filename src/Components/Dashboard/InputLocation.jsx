import React from "react";

const InputLocation = () => {
  return (
    <div className="w-full h-[96px] p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Location</h2>
      </div>
      <div id="InputForm" className="flex flex-col items-center space-y-4">
        <input
          formMethod="post"
          type="text"
          id="text"
          name="text"
          placeholder="Input Location"
          className="poppins-regular text-sm w-full h-8 p-2 border border-gray-300 rounded-md text-[#919191]"
          style={{ color: "black" }}
          required
        />
      </div>
    </div>
  );
};

export default InputLocation;
