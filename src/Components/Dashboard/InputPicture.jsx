import React, { useState } from "react";
import { AiFillPicture } from "react-icons/ai";

const InputPicture = ({ value, onChange }) => {
  const [fileName, setFileName] = useState(value || "Input Item Picture");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file); // Pass the selected file to the parent component
    }
  };

  return (
    <div className="w-full h-auto p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Item Picture</h2>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Use internal handler
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex items-center poppins-regular text-sm text-gray-400 w-full h-full border border-gray-300 rounded-md px-2 py-1 bg-white cursor-pointer">
            <AiFillPicture className="mr-2" />
            {fileName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPicture;
