import React, { useState } from "react";

const InputInformation = () => {
  const [information, setInformation] = useState("");

  return (
    <div className="w-full h-[262.5px] p-4 bg-white shadow-md rounded-3xl space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base poppins-semibold">Item Information</h2>
      </div>
      <div id="InputForm">
        <textarea
          formMethod="post"
          id="information"
          name="information"
          placeholder="Input Item Information"
          className="poppins-regular text-xs w-full h-44 p-2 border rounded-lg text-[#919191]"
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
