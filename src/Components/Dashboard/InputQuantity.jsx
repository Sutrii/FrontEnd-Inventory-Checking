import React from "react";

const InputQuantity = () => {
  return (
    <div className="w-full h-full p-4 bg-white shadow-md rounded-3xl space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base poppins-semibold">Item Quantity</h2>
      </div>
      <div id="InputForm">
        <input
          formMethod="post"
          type="text"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          id="text"
          name="text"
          placeholder="Input Item Quantity"
          className="poppins-regular text-xs w-full h-8 p-2 border rounded-lg text-[#919191]"
          style={{ color: "black" }}
          required
        />
      </div>
    </div>
  );
};

export default InputQuantity;
