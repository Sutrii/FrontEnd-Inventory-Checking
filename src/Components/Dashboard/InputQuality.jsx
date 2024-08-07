import React, { useState } from "react";
import { FiSquare } from "react-icons/fi";

const InputQuality = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="poppins-semibold text-lg">Item Quality</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <FiSquare className="text-black" />
        </div>
      </div>
      <div className="poppins-regular relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            Choose Item Quality
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Option 1
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Option 2
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Option 3
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputQuality;
