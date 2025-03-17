import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaGoogle } from "react-icons/fa";

// Import images
import slide1 from "../../../assets/pic-1.jpg";
import slide2 from "../../../assets/pic-2.jpg";
import slide3 from "../../../assets/pic-3.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthContext";

const Banner = () => {
    const { signInUser, signInWithGoogle, user } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [swiper, setSwiper] = useState(null);
    const [swiperDisabled, setSwiperDisabled] = useState(false);

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

    const handleLogin = (event) => {
        event.preventDefault();
        signInUser(email, password)
            .then(() => {
                setSwiperDisabled(false);
                if (swiper) swiper.autoplay.start();
            })
            .catch((error) => setError(error.message));
    };

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(() => {
                setSwiperDisabled(false);
                if (swiper) swiper.autoplay.start();
            })
            .catch((error) => setError(error.message));
    };

    // Stop autoplay on input focus
    const handleFocus = () => {
        if (swiper) swiper.autoplay.stop();
    };

    // Restart autoplay on input blur
    const handleBlur = () => {
        if (swiper) swiper.autoplay.start();
    };

    return (
        <section className="relative w-full h-[65vh] md:h-[60vh] lg:h-[70vh]">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full"
                allowTouchMove={!swiperDisabled}
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[65vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/30 dark:bg-black/40"></div>

                            {!user && index === 0 ? (
                                <div className="relative z-10 bg-white/20 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg text-center max-w-md mx-auto">
                                    <h2 className="text-3xl font-bold text-white mb-4">Please Log In to Continue</h2>
                                    <form onSubmit={handleLogin} className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                            required
                                            onFocus={handleFocus} // Stop autoplay on focus
                                            onBlur={handleBlur} // Restart autoplay on blur
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                            required
                                            onFocus={handleFocus} // Stop autoplay on focus
                                            onBlur={handleBlur} // Restart autoplay on blur
                                        />
                                        {error && <p className="text-red-500 text-sm">{error}</p>}
                                        <button
                                            type="submit"
                                            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        >
                                            Log In
                                        </button>
                                    </form>
                                    <button
                                        onClick={handleGoogleSign}
                                        className="w-full mt-3 bg-gray-100 text-black p-3 rounded-lg flex items-center justify-center"
                                    >
                                        <FaGoogle className="mr-2" /> Sign in with Google
                                    </button>
                                </div>
                            ) : (
                                <div className="relative z-10 bg-white/20 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg text-center max-w-3xl">
                                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
                                        {slide.title}
                                    </h1>
                                    <p className="text-base md:text-lg mb-6 text-gray-800 dark:text-gray-300">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:shadow-xl">
                                            {slide.button1}
                                        </button>
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-200 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl">
                                            {slide.button2}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
