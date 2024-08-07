import React from "react";
import { FiSquare } from "react-icons/fi";

const InputName = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Item Name</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <FiSquare className="text-black" />
        </div>
      </div>
      <div id="InputForm">
        <input
          formMethod="post"
          type="text"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          id="text"
          name="text"
          placeholder="Input Item Name"
          className="w-full p-2 border rounded-lg text-[#919191]"
          style={{ color: "black" }}
          required
        />
      </div>
    </div>
  );
};

export default InputName;
