import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-green-800 text-white p-1 flex justify-between items-center text-sm md:text-base">
      <div className="flex items-center gap-2">
        <FaLocationDot className="text-yellow-400" />
        <span>Address</span>
      </div>
      <div className="flex items-center gap-2">
        <MdEmail className="text-yellow-400" />
        <span>chaitanyacreation@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <IoCall className="text-yellow-400" />
        <span>+91 987654321</span>
      </div>
    </div>
  );
};

export default Header;
