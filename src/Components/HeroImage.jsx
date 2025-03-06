import React from "react";
import heroImage from "../assets/images/hero-image.jpg";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="hero-image"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore the World with{" "}
          <span className="text-yellow-400">TravelX</span>
        </h1>
        <p className="text-lg md:text-xl mt-3 max-w-2xl">
          Discover breathtaking destinations, exclusive travel packages, and
          unforgettable experiences.
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
          Plan Your Trip
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
