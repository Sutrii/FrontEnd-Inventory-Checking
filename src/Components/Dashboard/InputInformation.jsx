import React, { useState } from "react";

const InputInformation = () => {
  const [information, setInformation] = useState("");

  return (
    <div className="w-full h-[216px] p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Item Information</h2>
      </div>
      <div id="InputForm">
        <textarea
          formMethod="post"
          id="information"
          name="information"
          placeholder="Input Item Information"
          className="poppins-regular text-xs w-full h-[152px] p-1 border rounded-lg text-[#919191]"
          style={{ color: "black" }}
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          rows="4"
          required
        />
      </div>
    </div>
  );
};

export default InputInformation;
