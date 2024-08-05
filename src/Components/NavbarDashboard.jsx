import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCog } from "@fortawesome/free-solid-svg-icons";

const NavbarDashboard = () => {
  return (
    <div
      id="NavbarParent"
      className="w-full h-16 bg-white p-3"
    >
      <div id="InsideParent" className="flex w-full h-full justify-between">
        <div
          id="TitleSection"
          className="flex items-center w-[45%] h-full pl-3"
        >
          <span className="uppercase poppins-semibold text-lg tracking-widest">
            Teknologi Informasi SPMT
          </span>
        </div>
        <div
          id="IconSection"
          className="flex items-center justify-center w-[10%] h-full space-x-3"
        >
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon 
              icon={faEdit} 
              className="text-black cursor-pointer" 
            />
          </div>
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon 
              icon={faCog} 
              className="text-black cursor-pointer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
