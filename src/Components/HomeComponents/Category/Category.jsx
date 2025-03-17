import React, { useState } from "react";
import { FaLaptop, FaCamera, FaGamepad, FaMobileAlt, FaHeadphones, FaClock, FaTabletAlt, FaTv, FaTools, FaCar } from "react-icons/fa";
import categoriesData from '../../../../public/categories.json';
import productsData from '../../../../public/products.json';
import { motion } from "framer-motion"; // Import motion from framer-motion

const iconMap = {
  FaLaptop: <FaLaptop />,
  FaCamera: <FaCamera />,
  FaGamepad: <FaGamepad />,
  FaMobileAlt: <FaMobileAlt />,
  FaHeadphones: <FaHeadphones />,
  FaClock: <FaClock />,
  FaTabletAlt: <FaTabletAlt />,
  FaTv: <FaTv />,
  FaTools: <FaTools />,
  FaCar: <FaCar />
};

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredProducts = activeCategory === null
    ? productsData
    : productsData.filter((product) => product.categoryId === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-6">
      <div className="mx-auto px-6">

        {/* Category Buttons with Slide-in Animation */}
        <div className="flex flex-wrap justify-start items-center mb-4">
          <h2 className="text-gray-900 dark:text-gray-100 font-bold text-lg md:text-xl mr-4 ml-2">Categories:</h2>
          <motion.div
            className="flex overflow-x-auto space-x-4 py-2 px-2"
            initial={{ opacity: 0, x: -100 }} // Initial state (off-screen left)
            animate={{ opacity: 1, x: 0 }} // Final state (onscreen)
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className="flex items-center h-10 w-32 md:w-40 space-x-2 px-3 py-1 text-xs md:text-sm rounded-md text-white bg-gray-500 dark:bg-gray-700 shadow-md hover:opacity-80 whitespace-nowrap"
              onClick={() => setActiveCategory(null)}
            >
              <span>All Categories</span>
            </motion.button>

            {categoriesData.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center h-10 w-32 md:w-40 space-x-2 px-3 py-1 text-xs md:text-sm rounded-md text-white ${category.color} dark:${category.color} shadow-md hover:opacity-80 whitespace-nowrap`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -50 }} // Initial position off-screen
                animate={{ opacity: 1, x: 0 }} // Move into position
                transition={{ duration: 0.3 }}
              >
                {iconMap[category.icon]}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Display Products for the selected category */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <motion.div
              key={product.id}
              className="p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300"
              initial={{ opacity: 0, scale: 0.9 }} // Fade-in + Scale effect
              animate={{ opacity: 1, scale: 1 }} // Initial state
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }} // Hover effect for scaling and slight upward movement
            >
              <div className="relative w-full h-48 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2 h-10">
                {product.description}
              </p>
              <p className="text-xl font-bold text-gray-900 text-white mb-4">
                {product.price}
              </p>
              <motion.button
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-xs transition-all ease-in-out duration-200"
                whileHover={{ scale: 1.1 }} // Hover scale effect
                whileTap={{ scale: 0.95 }}  // Tap effect
              >
                Rent Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls with Slide-in Animation */}
        <div className="mt-6 flex justify-center space-x-4">
          <motion.button
            className={`h-10 w-20 text-sm bg-blue-500 dark:bg-blue-600 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Previous
          </motion.button>

          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              className={`h-10 w-10 text-sm rounded-md ${currentPage === index + 1 ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              onClick={() => goToPage(index + 1)}
              whileHover={{ scale: 1.2 }} // Hover effect for page numbers
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.button>
          ))}

          <motion.button
            className={`h-10 w-20 text-sm bg-blue-500 dark:bg-blue-600 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Next
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Category;
