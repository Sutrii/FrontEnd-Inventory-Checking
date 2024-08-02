import React from "react";

const NavbarDashboard = () => {
  return (
    <div
      id="NavbarParent"
      className="w-full h-[7.5%] bg-white border border-black p-3"
    >
      <div id="InsideParent" className="flex w-full h-full">
        <div
          id="TitleSection"
          className="flex align-items-center w-[45%] h-full pl-1"
        >
          <div className="flex">
            <span className="poppins-medium text-lg">
              SPMT INVENTORY CHECKING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
