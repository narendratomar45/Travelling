import React from "react";

const Welcome = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Welcome to <span className="text-yellow-400">TravelX</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Your journey starts here! Discover breathtaking destinations, unique
          experiences, and tailor-made travel packages to create unforgettable
          memories.
        </p>
        <button className="mt-6 bg-blue-900 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
