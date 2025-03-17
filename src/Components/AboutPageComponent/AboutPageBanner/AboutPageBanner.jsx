import React from 'react';
import banner2 from '../../../assets/AboutBanner2.jpg';

const AboutPageBanner = () => {
    return (
        <div
            className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${banner2})` }} // Use the imported image
        >
            {/* Gradient Overlay for Better Visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-600/50"></div>

            {/* Tagline Section */}
            <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4 md:px-8">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight opacity-90 shadow-lg mb-6">
                        Your One-Stop Destination for Gadget Rentals & Swaps
                    </h2>
                    <p className="text-lg md:text-xl opacity-80 mb-6">
                        Discover a new way to rent and swap gadgets with ease. Join our community today!
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex justify-center gap-4">
                        <a href="#explore" className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                            Explore Gadgets
                        </a>
                        <a href="#contact" className="btn btn-secondary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageBanner;
