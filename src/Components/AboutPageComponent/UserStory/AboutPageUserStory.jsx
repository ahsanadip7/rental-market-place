import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const userStory = {
    name: "Arman Hossain",
    location: "Dhaka, Bangladesh 🇧🇩",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder image
    storyPreview: "I had an old DSLR collecting dust, and I desperately needed a gaming laptop...",
    fullStory: `I had an old DSLR camera that I barely used anymore, but I really needed a gaming laptop for my work and personal use. Traditional selling platforms were complicated, and I wasn’t getting good deals.

    Then I found GadgetSwap! In just a few days, I connected with a user who had a powerful gaming laptop but wanted to get into photography. It was a perfect match! The platform made the swap smooth, secure, and effortless.
    
    Now, I have my dream gaming laptop without spending extra cash! Thanks to GadgetSwap, I got exactly what I needed in a hassle-free way.`,
    gadgetSwapped: "DSLR Camera 📸 → Gaming Laptop 💻",
    date: "February 2025",
    gradient: "from-blue-500 to-teal-500",
};

const AboutPageUserStory = () => {
    const { isDarkMode } = useDarkMode();
    const [expanded, setExpanded] = useState(false); // Keeps track of whether the story is expanded or not

    const toggleStory = () => {
        console.log('btn cliked');
        setExpanded(!expanded); // Toggle between expanded and collapsed state
    };

    return (
        <section className={` px-6 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                    How GadgetSwap Changed My Life 🌟
                </h2>
                <p className="mt-5 text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-300">
                    A real story from one of our happy users who found the perfect swap!
                </p>
            </div>

            {/* Testimonial Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="max-w-3xl mx-auto mt-12 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 relative border border-gray-300 dark:border-gray-700"
            >
                {/* Floating Gradient Effect */}
                <div className={`absolute inset-0 opacity-30 blur-3xl transition-all duration-300 ${expanded ? "scale-110" : "scale-75"} bg-gradient-to-r ${userStory.gradient}`}></div>

                {/* User Info */}
                <div className="flex items-center space-x-4 relative z-10">
                    <img src={userStory.profileImage} alt={userStory.name} className="w-16 h-16 rounded-full border-4 border-blue-400 dark:border-teal-300 shadow-lg" />
                    <div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${userStory.gradient} bg-clip-text text-transparent`}>
                            {userStory.name}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400">{userStory.location}</p>
                    </div>
                </div>

                {/* Story Content */}
                <div className="relative mt-6 text-lg leading-relaxed">
                    <FaQuoteLeft className="absolute -top-2 -left-4 text-gray-400 dark:text-gray-500 text-2xl " />
                    <p className="mx-3 text-gray-700 dark:text-gray-300 italic">
                        {expanded ? userStory.fullStory : userStory.storyPreview}
                    </p>
                    <FaQuoteRight className="absolute -bottom-2 -right-4 text-gray-400 dark:text-gray-500 text-2xl" />
                </div>

                {/* Swap Details */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4 text-gray-600 dark:text-gray-400"
                >
                    <p><span className="font-semibold">Gadget Swapped:</span> {userStory.gadgetSwapped}</p>
                    <p><span className="font-semibold">Date:</span> {userStory.date}</p>
                </motion.div>

                {/* Read More Button */}
                
            </motion.div>
            <button
                    onClick={toggleStory} // The toggleStory function is invoked on button click
                    className={`mt-6 block mx-auto text-center text-lg font-semibold py-3 px-6 rounded-xl transition-all duration-300
                        ${expanded ? "bg-gradient-to-r from-red-500 to-orange-500 text-white" : "bg-gradient-to-r from-blue-500 to-teal-500 text-white"}`}

                >
                    {expanded ? "Read Less" : "Read Full Story"}
                </button>
        </section>
    );
};

export default AboutPageUserStory;
