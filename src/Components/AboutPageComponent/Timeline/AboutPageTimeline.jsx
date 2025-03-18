import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaWrench, FaRocket } from "react-icons/fa";
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";

const timelineData = [
    {
        year: "2023",
        title: "Idea Was Born",
        icon: <FaLightbulb />,
        description: "The concept of GadgetSwap was envisioned.",
        gradient: "from-yellow-400 to-orange-500",
        iconColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
        textColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
        year: "2024",
        title: "First Prototype",
        icon: <FaWrench />,
        description: "We built and tested the first working version.",
        gradient: "from-green-400 to-blue-500",
        iconColor: "bg-gradient-to-r from-green-500 to-blue-600",
        textColor: "text-green-600 dark:text-green-400",
    },
    {
        year: "2025",
        title: "Official Launch 🚀",
        icon: <FaRocket />,
        description: "GadgetSwap is now live for everyone!",
        gradient: "from-purple-500 to-pink-500",
        iconColor: "bg-gradient-to-r from-purple-500 to-pink-600",
        textColor: "text-purple-600 dark:text-purple-400",
    },
];

const AboutPageTimeline = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <section className={`py-16 transition-all duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Our Journey 🚀
                </h2>
                <p className="mt-3 max-w-lg mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-400">
                    A timeline of how GadgetSwap grew from an idea to reality.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto mt-12">
                <div className="border-l-4 border-blue-400 dark:border-blue-300 absolute h-full left-5 md:left-1/2 transform -translate-x-1/2"></div>

                <div className="space-y-10">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.3, duration: 0.5, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            className="relative flex items-start md:items-center"
                        >
                            {/* Icon Bubble */}
                            <motion.div
                                className={`w-12 h-12 flex justify-center items-center text-white text-2xl rounded-full shadow-lg absolute left-0 md:left-1/2 transform md:-translate-x-1/2 transition-all duration-300 ${item.iconColor}`}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {item.icon}
                            </motion.div>

                            {/* Timeline Card */}
                            <motion.div
                                className={`ml-16 md:ml-0 md:pl-20 md:max-w-sm p-6 rounded-xl shadow-lg border transition-all duration-300 
                ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className={`text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                    {item.year} - {item.title}
                                </h3>
                                <p className={`mt-2 text-base ${item.textColor}`}>
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPageTimeline;
