import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images
import slide1 from "../../../assets/pic-1.jpg";
import slide2 from "../../../assets/pic-2.jpg";
import slide3 from "../../../assets/pic-3.jpg";

const Banner = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [username, setUsername] = useState(""); // For username input
    const [password, setPassword] = useState(""); // For password input
    const [swiper, setSwiper] = useState(null); // Swiper instance to control autoplay
    const [swiperDisabled, setSwiperDisabled] = useState(false); // Track swiper disable state

    const slides = [
        {
            image: slide1,
            title: "Swap Your Gadgets Securely",
            description: "Exchange your old gadgets for the latest tech with verified users.",
            button1: "Explore Swaps",
            button2: "Start Swapping",
        },
        {
            image: slide2,
            title: "Rent Tech, Save More",
            description: "Enjoy premium gadgets without the high cost—rent your favorites today!",
            button1: "Browse Rentals",
            button2: "List Your Gadget",
        },
        {
            image: slide3,
            title: "Find Your Perfect Gadget",
            description: "Discover a wide range of gadgets available for rent or swap.",
            button1: "View Listings",
            button2: "Post Your Gadget",
        },
    ];

    // Handle login (simple simulation)
    const handleLogin = () => {
        if (username === "user" && password === "password") {
            setIsLoggedIn(true); // Simulate successful login
            setSwiperDisabled(false); // Re-enable swiper after login
            if (swiper) swiper.autoplay.start(); // Start autoplay after login
        } else {
            alert("Invalid username or password");
        }
    };

    // Handle input focus (disables swiper when typing)
    const handleInputFocus = () => {
        setSwiperDisabled(true); // Disable swiper when interacting with input fields
        if (swiper) swiper.autoplay.stop(); // Stop autoplay when input is focused
    };

    // Handle input blur (re-enables swiper when focus is lost)
    const handleInputBlur = () => {
        setSwiperDisabled(false); // Re-enable swiper after interaction with inputs
        if (swiper) swiper.autoplay.start(); // Start autoplay when input loses focus
    };

    return (
        <section className="relative w-full h-[65vh] md:h-[60vh] lg:h-[70vh]">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false, // Allow autoplay to continue even if user interacts
                }}
                loop={true}
                className="w-full h-full"
                allowTouchMove={!swiperDisabled} // Disable swipe when interacting with login
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)} // Set swiper instance
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[65vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Background Overlay with lighter blur effect */}
                            <div className="absolute inset-0 bg-black/30 dark:bg-black/40 backdrop-blur-lg"></div>

                            {/* Conditional rendering for login form on the first slide */}
                            {index === 0 && !isLoggedIn && (
                                <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-700 dark:to-blue-500 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-xl text-center max-w-md mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
                                        Please Log In to Continue
                                    </h2>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            onFocus={handleInputFocus} // Disable swiper on focus
                                            onBlur={handleInputBlur} // Re-enable swiper on blur
                                            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onFocus={handleInputFocus} // Disable swiper on focus
                                            onBlur={handleInputBlur} // Re-enable swiper on blur
                                            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                                        />
                                        <button
                                            onClick={handleLogin}
                                            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition-all duration-300 ease-in-out"
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* After successful login or on slides other than the first, show the regular banner content */}
                            {isLoggedIn || index !== 0 ? (
                                <div className="relative z-10 bg-white/20 dark:bg-black/20 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg text-center max-w-3xl">
                                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100 drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-base md:text-lg mb-6 text-gray-800 dark:text-gray-300">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:shadow-xl transition-all">
                                            {slide.button1}
                                        </button>
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-200 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all">
                                            {slide.button2}
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
