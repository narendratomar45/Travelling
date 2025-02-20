import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TravelX</h1>
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Destinations</li>
          <li className="hover:text-yellow-400 cursor-pointer">Packages</li>
          <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
