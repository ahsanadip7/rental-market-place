import React from 'react';
import banner2 from '../../../assets/AboutBanner2.jpg';
import { useDarkMode } from '../../../Contexts/DarkModeProvider/DarkModeProvider';

const AboutPageBanner = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner2})` }} // Use the imported image
    >
      {/* Dynamic Gradient Overlay for Light & Dark Mode */}
      <div
        className={`absolute inset-0 ${isDarkMode
          ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/60'
          : 'bg-gradient-to-r from-blue-500/60 to-purple-600/60'
          }`}
      ></div>

      {/* Tagline Section */}
      <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4 md:px-8">
        <div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight shadow-lg mb-6 bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-gray-300 to-gray-500' // Dark blue gradient for dark mode
                : 'bg-gradient-to-r from-pink-200 to-indigo-300' // Warm gradient for light mode
              }`}
          >
            Your One-Stop Destination for Gadget Rentals & Swaps
          </h2>




          <p
            className={`text-lg md:text-xl opacity-90 mb-6 bg-clip-text text-transparent ${isDarkMode
              ? 'bg-gradient-to-r from-gray-300 to-gray-500' // Dark blue gradient for dark mode
                : 'bg-gradient-to-r from-pink-200 to-indigo-300'
              }`}
          >
            Discover a new way to rent and swap gadgets with ease. Join our community today!
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#explore"
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300
              bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
            >
              Explore Gadgets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300
              bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;
