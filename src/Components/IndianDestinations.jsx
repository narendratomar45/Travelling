import React, { useState } from "react";
import tajmahal from "../assets/images/tajmahal.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import goa from "../assets/images/goa.jpg";
import kerala from "../assets/images/kerala.jpg";
import varanasi from "../assets/images/varanasi.jpg";

const destinations = [
  {
    name: "Taj Mahal, Agra",
    image: tajmahal,
    description: "A symbol of love and one of the Seven Wonders of the World.",
  },
  {
    name: "Jaipur, Rajasthan",
    image: jaipur,
    description:
      "The Pink City known for its royal palaces and vibrant culture.",
  },
  {
    name: "Goa Beaches",
    image: goa,
    description: "A paradise for beach lovers and nightlife enthusiasts.",
  },
  {
    name: "Kerala Backwaters",
    image: kerala,
    description: "Serene houseboat cruises through lush green landscapes.",
  },
  {
    name: "Varanasi, Uttar Pradesh",
    image: varanasi,
    description:
      "One of the oldest cities in the world, famous for its spiritual essence.",
  },
];

const IndianDestinations = () => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        Popular <span className="text-yellow-400">Destinations in India</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {destinations
          .slice(0, showAll ? destinations.length : 3)
          .map((destination, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-6 bg-blue-900 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
      >
        {showAll ? "View Less" : "Show All Destinations"}
      </button>
    </div>
  );
};

export default IndianDestinations;
