import React, { useState } from "react";
import { FiSquare } from "react-icons/fi";

const InputPicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="poppins-semibold text-lg">Item Picture</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <FiSquare className="text-black" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="border border-gray-300 rounded-md px-4 py-2 bg-white cursor-pointer">
            Input Picture
          </div>
        </div>
        {selectedImage && (
          <div className="mt-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-32 h-32 object-cover border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPicture;
