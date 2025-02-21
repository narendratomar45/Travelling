import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h2 className="text-xl font-bold mb-3">About Us</h2>
          <p className="text-sm">
            Explore the world with TravelX. We provide the best travel
            experiences with exclusive packages and destinations.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Destinations
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Packages</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="text-sm">Email: chaitanyacreation@gmail.com</p>
          <p className="text-sm">Phone: +91 987654321</p>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <FaFacebook className="text-xl cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="text-xl cursor-pointer hover:text-yellow-400" />
            <FaYoutube className="text-xl cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-8">
        © 2025 TravelX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
