import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";

const AboutPageEsterEgg = () => {
    const { isDarkMode } = useDarkMode();
    const [isQuizAnswered, setIsQuizAnswered] = useState(false);
    const [showSecretMessage, setShowSecretMessage] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState("");
    console.log(showSecretMessage);

    const handleQuizAnswer = (answer) => {
        setQuizAnswer(answer);
        setIsQuizAnswered(true);
        setShowSecretMessage(true);
    };

    const handleCloseMessage = () => {
        setShowSecretMessage(false);
        setIsQuizAnswered(false);
        setQuizAnswer("");
    };

    return (
        <section className={`py-24 px-6 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                A Hidden Easter Egg 🥚
            </h2>
            <p className="mt-5 text-lg max-w-xl mx-auto text-gray-500 dark:text-gray-300">
                Click below to discover a fun surprise!
            </p>
        </div>

        {/* Quiz Section */}
        <div className="mt-12">
            <h3 className="text-3xl font-semibold text-center mb-4">
                Which gadget suits your personality?
            </h3>

            <div className="flex justify-center space-x-6">
                <motion.button
                    onClick={() => handleQuizAnswer("Gadget Lover")}
                    className={`px-8 py-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"} hover:bg-indigo-500 transition-all duration-300`}
                >
                    Gadget Lover
                </motion.button>

                <motion.button
                    onClick={() => handleQuizAnswer("Tech Enthusiast")}
                    className={`px-8 py-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"} hover:bg-teal-500 transition-all duration-300`}
                >
                    Tech Enthusiast
                </motion.button>

                <motion.button
                    onClick={() => handleQuizAnswer("Gadget Explorer")}
                    className={`px-8 py-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"} hover:bg-blue-500 transition-all duration-300`}
                >
                    Gadget Explorer
                </motion.button>

                <motion.button
                    onClick={() => handleQuizAnswer("Casual User")}
                    className={`px-8 py-4 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"} hover:bg-orange-500 transition-all duration-300`}
                >
                    Casual User
                </motion.button>
            </div>

            {/* Secret Message */}
            {isQuizAnswered && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 p-6 bg-indigo-600 text-white rounded-lg relative"
                >
                    <button
                        onClick={handleCloseMessage}
                        className="absolute top-2 right-2 text-xl font-semibold text-white hover:text-gray-200"
                    >
                        ✖
                    </button>
                    {quizAnswer === "Gadget Lover" && (
                        <p className="text-lg font-semibold">
                            "Congratulations! You're a true gadget lover! You have a special place in the tech world 🚀."
                        </p>
                    )}
                    {quizAnswer === "Tech Enthusiast" && (
                        <p className="text-lg font-semibold">
                            "You're a tech enthusiast! You’re always exploring the latest in technology 🔧."
                        </p>
                    )}
                    {quizAnswer === "Gadget Explorer" && (
                        <p className="text-lg font-semibold">
                            "A gadget explorer! You’re always on the hunt for the coolest and most innovative gadgets 🧑‍🔬."
                        </p>
                    )}
                    {quizAnswer === "Casual User" && (
                        <p className="text-lg font-semibold">
                            "You’re a casual user. Gadgets are useful, but you're all about simplicity and functionality 👌."
                        </p>
                    )}
                </motion.div>
            )}
        </div>
    </section>
    );
};

export default AboutPageEsterEgg;