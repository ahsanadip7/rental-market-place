import React, { useState } from "react";
// Assuming the JSON data is in a local file
import productsData from "../../../../public/products.json"; // Adjust path accordingly

const brands = ["Apple", "Samsung", "Sony", "LG", "Nokia"];

const BrandsFilter = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Set the number of products per page

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        setCurrentPage(1); // Reset to the first page when a new brand is selected
    };

    // Handle showing all products
    const handleAllProductsClick = () => {
        setSelectedBrand(null);
    };

    // Filter products based on the selected brand
    const filteredProducts = selectedBrand
        ? productsData.filter((product) => product.brand === selectedBrand)
        : productsData;

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Brands</h2>

            {/* Brand buttons and All Products button */}
            <div className="flex justify-center gap-6 mb-6">
                <button
                    onClick={handleAllProductsClick}
                    className="px-6 py-2 text-lg bg-gray-500 text-white rounded-full hover:bg-gray-600 focus:outline-none transition-colors duration-300 ease-in-out"
                >
                    All Products
                </button>
                {brands.map((brand) => (
                    <button
                        key={brand}
                        onClick={() => handleBrandClick(brand)}
                        className="px-6 py-2 text-lg bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none transition-colors duration-300 ease-in-out"
                    >
                        {brand}
                    </button>
                ))}
            </div>

            {/* Display products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out"
                            />
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="mt-2 font-bold">{product.price}</p>
                            <button className="mt-4 px-6 py-3 text-lg font-semibold text-white rounded-full border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-padding hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 hover:border-transparent hover:scale-105 hover:shadow-xl focus:outline-none transition-all duration-300 ease-in-out">
                                Rent Now
                            </button>

                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-500">No products available for this brand.</p>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-400 transition-colors duration-300 ease-in-out"
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-lg font-semibold">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-400 transition-colors duration-300 ease-in-out"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BrandsFilter;
