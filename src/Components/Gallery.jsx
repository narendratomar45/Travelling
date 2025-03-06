import React from "react";
import tajmahal from "../assets/images/tajmahal.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import goa from "../assets/images/goa.jpg";
import kerala from "../assets/images/kerala.jpg";
import varanasi from "../assets/images/varanasi.jpg";

const destinations = [
  { name: "Taj Mahal, Agra", image: tajmahal },
  { name: "Jaipur, Rajasthan", image: jaipur },
  { name: "Goa Beaches", image: goa },
  { name: "Kerala Backwaters", image: kerala },
  { name: "Varanasi, Uttar Pradesh", image: varanasi },
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        Explore <span className="text-yellow-400">Our Gallery</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="relative group">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:brightness-50 transition"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300 rounded">
              <p className="text-white text-lg font-semibold text-center">
                {destination.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
