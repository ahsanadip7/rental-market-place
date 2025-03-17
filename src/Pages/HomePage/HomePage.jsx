import React, { useState, useEffect } from "react";
import Category from "../../Components/HomeComponents/Category/Category";
import BrandsFilter from "../../Components/HomeComponents/BrandsFilter/BrandsFilter";
import Banner from "../../Components/HomeComponents/Banner/Banner";

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 3 seconds
        }, 3000); // Set the delay time as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            {/* <Banner /> */}

            {/* Loading Spinner for Category and Brands */}
            {loading ? (
                <div className="flex justify-center items-center h-56">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                </div>
            ) : (
                <>
                    {/* Banner Section */}
                    <Banner></Banner>
                    {/* Category and Brands Filter */}
                    <Category />
                    <BrandsFilter />
                </>
            )}
        </div>
    );
};

export default HomePage;
