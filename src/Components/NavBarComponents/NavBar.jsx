import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiHome, FiGrid, FiLayers, FiPhone, FiMoon, FiSun } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { useDarkMode } from "../../Contexts/DarkModeProvider/DarkModeProvider";


const NavBar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn: true, // Change to false for logged-out state
        name: "John Doe",
        profilePic: "https://i.pravatar.cc/40",
    });
    const [showSignOut, setShowSignOut] = useState(false);

    const navItems = [
        { name: "Home", icon: <FiHome size={22} className="text-blue-400" />, link: "/home" },
        { name: "Browse", icon: <FiGrid size={22} className="text-green-400" />, link: "/browse" },
        { name: "Categories", icon: <FiLayers size={22} className="text-yellow-400" />, link: "/categories" },
        { name: "Contact", icon: <FiPhone size={22} className="text-red-400" />, link: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors 
            ${isDarkMode 
                ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-gray-200" 
                : "bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1E293B] shadow-lg"}`
        }>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo & Search Bar */}
                    <div className="flex items-center space-x-2">

                        
                         {/* Dark Mode Toggle */}
                         <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
                        >
                            {isDarkMode ? <FiSun size={15} className="text-yellow-400" /> : <FiMoon size={15} className="text-gray-700" />}
                        </button>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981] tracking-wide ">
                            GadgetSwap
                        </h1>

                        
                        <div className="relative hidden md:block ml-2">
                            <input
                                type="text"
                                placeholder="Search gadgets..."
                                className={`w-64 pl-10 pr-4 py-2 rounded-full transition-all border ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"} focus:outline-none focus:border-blue-500`}
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-6 font-medium">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className={`flex text-white items-center gap-2 text-lg transition duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:before:w-full before:transition-all before:duration-300 ${
                                        isDarkMode ? "text-gray-300 hover:text-yellow-400 before:bg-yellow-400" : "text-gray-700 hover:text-[#FACC15] before:bg-[#FACC15]"
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* User Authentication & Dark Mode Toggle */}
                    <div className="flex items-center space-x-4">
                       

                        {user.isLoggedIn ? (
                            <div
                                className="relative flex items-center space-x-2 cursor-pointer"
                                onMouseEnter={() => setShowSignOut(true)}
                                onMouseLeave={() => setShowSignOut(false)}
                            >
                                <img src={user.profilePic} alt="Profile" className="w-9 h-9 rounded-full border border-gray-500" />
                                <span className={`font-medium ${isDarkMode ? "text-white" : "text-white"}`}>{user.name}</span>

                                {/* Sign Out Button (Only visible on hover) */}
                                {showSignOut && (
                                    <button
                                        onClick={() => setUser({ isLoggedIn: false })}
                                        className="absolute top-9 left-0 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={() => setUser({ isLoggedIn: true, name: "John Doe", profilePic: "https://i.pravatar.cc/40" })}
                                    className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
                                >
                                    Sign Up
                                </button>
                                <button
                                    onClick={() => setUser({ isLoggedIn: true, name: "John Doe", profilePic: "https://i.pravatar.cc/40" })}
                                    className="hidden md:block bg-gray-300 text-gray-900 px-5 py-2 rounded-full shadow-md hover:bg-gray-400 transition-all"
                                >
                                    Sign In
                                </button>
                            </>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FiX size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-8 transition-transform transform ${
                    isMenuOpen ? "translate-x-0 bg-gray-900 bg-opacity-95" : "translate-x-full"
                } duration-300`}
            >
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
                    <FiX size={28} className="text-white" />
                </button>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.link} className="text-2xl text-white flex items-center gap-2 hover:text-yellow-400 transition-all">
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
                {!user.isLoggedIn ? (
                    <>
                        <button
                            onClick={() => setUser({ isLoggedIn: true, name: "John Doe", profilePic: "https://i.pravatar.cc/40" })}
                            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => setUser({ isLoggedIn: true, name: "John Doe", profilePic: "https://i.pravatar.cc/40" })}
                            className="bg-gray-300 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-gray-400 transition-all"
                        >
                            Sign In
                        </button>
                    </>
                ) : (
                    <button onClick={() => setUser({ isLoggedIn: false })} className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-all">
                        Sign Out
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
