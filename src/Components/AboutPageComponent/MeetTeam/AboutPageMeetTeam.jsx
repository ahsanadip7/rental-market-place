import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";

const teamMembers = [
    {
        name: "Rakib",
        role: "Frontend Developer 🎨",
        favoriteGadget: "Mechanical Keyboard ⌨️",
        funFact: "Can design in sleep, but forgets coffee on the desk!",
        experience: "3+ years in React, Tailwind CSS, and UI/UX design.",
        hobbies: "Loves gaming, photography, and experimenting with animations.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        name: "Aisha",
        role: "UI/UX Designer ✍️",
        favoriteGadget: "iPad Pro 🖊️",
        funFact: "Sketches wireframes before breakfast!",
        experience: "5+ years in Figma, Adobe XD, and design psychology.",
        hobbies: "Enjoys painting, traveling, and collecting vintage gadgets.",
        gradient: "from-green-500 to-teal-600",
    },
    {
        name: "Zayn",
        role: "Backend Developer ⚙️",
        favoriteGadget: "Custom-Built PC 🖥️",
        funFact: "Writes code faster than he types messages!",
        experience: "Expert in Node.js, MongoDB, and cloud computing.",
        hobbies: "Loves chess, solving complex algorithms, and reading sci-fi novels.",
        gradient: "from-red-500 to-orange-600",
    },
    {
        name: "Samiha",
        role: "Marketing Strategist 📢",
        favoriteGadget: "MacBook Pro 💻",
        funFact: "Can sell ice to an Eskimo!",
        experience: "Marketing pro with 6+ years in digital branding.",
        hobbies: "Passionate about blogging, photography, and coffee tasting.",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        name: "Ahmed",
        role: "DevOps Engineer ⚙️",
        favoriteGadget: "Raspberry Pi 🍓",
        funFact: "Once automated a project in 10 minutes during a lunch break!",
        experience: "7+ years in cloud services, Docker, and CI/CD pipelines.",
        hobbies: "Enjoys hiking, listening to podcasts, and tinkering with home automation.",
        gradient: "from-yellow-500 to-red-600",
    },
    // Additional members
    {
        name: "Mina",
        role: "Product Manager 💼",
        favoriteGadget: "Apple Watch ⌚",
        funFact: "Has an impeccable memory for product features!",
        experience: "8+ years in product management and team leadership.",
        hobbies: "Loves reading business books, hiking, and trying new cuisines.",
        gradient: "from-teal-500 to-blue-600",
    },
    {
        name: "Sofia",
        role: "Full-Stack Developer 💻",
        favoriteGadget: "MacBook Air 💻",
        funFact: "Can code and make lattes at the same time!",
        experience: "4+ years in JavaScript, Node.js, and React.",
        hobbies: "Enjoys learning new programming languages, cooking, and yoga.",
        gradient: "from-pink-500 to-red-600",
    },
    {
        name: "Imran",
        role: "Data Scientist 📊",
        favoriteGadget: "Google Pixel 6 📱",
        funFact: "Can predict trends faster than most AI algorithms!",
        experience: "6+ years in data analysis, machine learning, and AI.",
        hobbies: "Passionate about numbers, chess, and technology.",
        gradient: "from-orange-500 to-yellow-600",
    },
    {
        name: "Lara",
        role: "Quality Assurance Engineer 🧪",
        favoriteGadget: "Test Automation Tool 🛠️",
        funFact: "Can find bugs before they even appear!",
        experience: "5+ years in manual and automated testing.",
        hobbies: "Loves reading mystery novels, watching crime dramas, and baking.",
        gradient: "from-blue-500 to-teal-600",
    },
];

const MeetTheTeam = () => {
    const { isDarkMode } = useDarkMode();
    const [expandedMember, setExpandedMember] = useState(null);
    const scrollRef = useRef(null);

    const toggleExpand = (index) => {
        setExpandedMember(expandedMember === index ? null : index);
    };

    return (
        <section className={`py-24 px-6 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                    Meet The Dream Team 🚀
                </h2>
                <p className="mt-5 text-lg max-w-xl mx-auto text-gray-500 dark:text-gray-300">
                    A passionate team dedicated to revolutionizing gadget swapping!
                </p>
            </div>

            {/* Scrollable Section with Smooth Scrolling */}
            <motion.div
                ref={scrollRef}
                className="relative w-full mt-12 pb-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                <div className="flex space-x-6 px-6 md:px-12 lg:px-24 w-max">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                            className="relative w-72 md:w-80 flex-shrink-0"
                        >
                            <div
                                onClick={() => toggleExpand(index)}
                                className={`cursor-pointer p-8 w-full h-72 rounded-xl shadow-lg border relative flex flex-col justify-center items-center
                                    ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                            >
                                {/* Floating Gradient Background */}
                                <div
                                    className={`absolute inset-0 opacity-30 blur-2xl transition-all duration-300 
        ${expandedMember === index ? "scale-110" : "scale-75"} 
        bg-gradient-to-r ${member.gradient} 
        ${isDarkMode ? "opacity-40" : "opacity-30"}`}
                                ></div>

                                <h3
                                    className={`relative text-2xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent 
        ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
                                >
                                    {member.name}
                                </h3>

                                <p
                                    className={`relative mt-2 text-lg font-semibold 
        ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                                >
                                    {member.role}
                                </p>

                                <p
                                    className={`relative mt-4 font-medium 
        ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                                >
                                    <span className="font-semibold">Favorite Gadget: </span> {member.favoriteGadget}
                                </p>

                                <p
                                    className={`relative mt-3 italic 
        ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                                >
                                    "{member.funFact}"
                                </p>

                            </div>

                            {/* Expandable Details */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={expandedMember === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`mt-2 p-6 w-full rounded-lg shadow-lg border overflow-hidden transition-all duration-300
                                    ${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-gray-50 border-gray-300 text-gray-800"}`}
                            >
                                <p className="text-md"><span className="font-semibold">Experience:</span> {member.experience}</p>
                                <p className="text-md mt-3"><span className="font-semibold">Hobbies:</span> {member.hobbies}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default MeetTheTeam;
