import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";

const AboutPageLiveCounter = () => {
    const { isDarkMode } = useDarkMode();
    const [gadgetsSwapped, setGadgetsSwapped] = useState(0);
    const [moneySaved, setMoneySaved] = useState(0);
    const [ewasteReduced, setEwasteReduced] = useState(0);

    // Function to simulate live data updates
    const updateLiveData = () => {
        setGadgetsSwapped(prev => prev + Math.floor(Math.random() * 2)); // Simulating data increment
        setMoneySaved(prev => prev + Math.floor(Math.random() * 5)); // Simulating money saved
        setEwasteReduced(prev => prev + Math.floor(Math.random() * 2)); // Simulating e-waste reduced
    };

    // Set interval for updating the counters every 2 seconds
    useEffect(() => {
        const interval = setInterval(updateLiveData, 2000); // Update every 2 seconds
        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    return (
         <section className={`pb-20 px-6 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                    Real-Time Impact 🚀
                </h2>
                <p className="mt-5 text-lg max-w-xl mx-auto text-gray-500 dark:text-gray-300">
                    See how we're making a difference in the world with real-time data!
                </p>
            </div>

            {/* Live Counter Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    className="p-8 rounded-xl shadow-lg bg-indigo-600 text-white flex flex-col items-center justify-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-4xl font-bold">📦 Gadgets Swapped</h3>
                    <p className="text-2xl font-semibold">{gadgetsSwapped.toLocaleString()}</p>
                </motion.div>

                <motion.div
                    className="p-8 rounded-xl shadow-lg bg-green-600 text-white flex flex-col items-center justify-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-4xl font-bold">💰 Money Saved by Renting</h3>
                    <p className="text-2xl font-semibold">${moneySaved.toLocaleString()}</p>
                </motion.div>

                <motion.div
                    className="p-8 rounded-xl shadow-lg bg-teal-600 text-white flex flex-col items-center justify-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-4xl font-bold">🌍 E-waste Reduced</h3>
                    <p className="text-2xl font-semibold">{ewasteReduced}kg</p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPageLiveCounter;