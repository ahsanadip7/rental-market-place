import React, { useContext, useState } from "react";
import { FiSearch, FiMenu, FiX, FiHome, FiGrid, FiLayers, FiPhone, FiMoon, FiSun, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../Contexts/DarkModeProvider/DarkModeProvider";
import { AuthContext } from "../../Contexts/AuthProvider/AuthContext";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navItems = [
        { name: "Home", icon: <FiHome size={22} className="text-blue-400" />, link: "/" },
        { name: "Browse", icon: <FiGrid size={22} className="text-green-400" />, link: "/browse" },
        { name: "Categories", icon: <FiLayers size={22} className="text-yellow-400" />, link: "/categories" },
        { name: "Contact", icon: <FiPhone size={22} className="text-red-400" />, link: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors 
            ${isDarkMode
                ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-gray-200"
                : "bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1E293B] shadow-lg"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo & Search Bar */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
                        >
                            {isDarkMode ? <FiSun size={15} className="text-yellow-400" /> : <FiMoon size={15} className="text-gray-700" />}
                        </button>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981] tracking-wide">
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
                                    className={`flex text-white items-center gap-2 text-lg transition duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:before:w-full before:transition-all before:duration-300 ${isDarkMode ? "text-gray-300 hover:text-yellow-400 before:bg-yellow-400" : "text-gray-700 hover:text-[#FACC15] before:bg-[#FACC15]"
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* User Profile or Authentication Links */}
                    <div className="flex items-center md:ml-10 space-x-4">
                        {user ? (
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                               
                                {/* User Profile */}
                                <div className="flex flex-row items-center justify-center">
                                    
                                    <span>
                                        <img
                                            src={user.photoURL || "https://via.placeholder.com/40"} // Fallback image
                                            alt="User Avatar"
                                            className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                                        />
                                    </span>

                                    <span>
                                        <p className="px-4 py-2 text-blue text-center font-medium text-white hidden md:flex">{user.displayName || "User"}</p>
                                    </span>
                                </div>


                                {isDropdownOpen && (
                                    <div className="absolute left-3 mt-0 bg-white shadow-lg rounded-lg py-2 w-44 text-black">

                                        <button
                                            onClick={signOutUser}
                                            className="w-full flex items-center justify-center px-4 py-2 text-red-600 hover:bg-red-100 transition-all"
                                        >
                                            <FiLogOut className="mr-2" />
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/signup"
                                    className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/signin"
                                    className="hidden md:block bg-gray-300 text-gray-900 px-5 py-2 rounded-full shadow-md hover:bg-gray-400 transition-all"
                                >
                                    Sign In
                                </Link>
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
            <div className={`md:hidden fixed top-16 right-0 h-[400px] w-[300px]  flex flex-col items-center justify-center space-y-8 transition-transform transform ${isMenuOpen ? "translate-x-0 bg-gray-900 bg-opacity-95" : "translate-x-full"
                } duration-300`}
            >

                {navItems.map((item, index) => (
                    <Link key={index} to={item.link} className="text-xl text-white flex items-center gap-2 hover:text-yellow-400 transition-all">
                        {item.icon}
                        {item.name}
                    </Link>
                ))}

                {user ? (
                    <>

                        <button
                            onClick={signOutUser}
                            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-all flex items-center space-x-2"
                        >
                            <FiLogOut size={20} />
                            <span>Sign Out</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all">
                            Sign Up
                        </Link>
                        <Link to="/signin" className="bg-gray-300 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-gray-400 transition-all">
                            Sign In
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
