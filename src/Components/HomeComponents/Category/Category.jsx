import React, { useState, useContext } from "react";
import { FaLaptop, FaCamera, FaGamepad, FaMobileAlt, FaHeadphones, FaClock, FaTabletAlt, FaTv, FaTools, FaCar } from "react-icons/fa";
import categoriesData from '../../../../public/categories.json';
import productsData from '../../../../public/products.json';
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useDarkMode } from "../../../Contexts/DarkModeProvider/DarkModeProvider";

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

  // Get dark mode status from context
  const { isDarkMode } = useDarkMode();

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
    <section className={`py-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="mx-auto px-6">

        {/* Category Buttons with Slide-in Animation */}
        <div className="flex flex-wrap justify-start items-center mb-4">
          <motion.div
            className="flex overflow-x-auto space-x-4 py-2 px-2"
            initial={{ opacity: 0, x: -100 }} // Initial state (off-screen left)
            animate={{ opacity: 1, x: 0 }} // Final state (onscreen)
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className={`flex items-center h-10 w-32 md:w-40 space-x-2 px-3 py-1 text-xs md:text-sm rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-500 text-white'} shadow-md hover:opacity-80 whitespace-nowrap`}
              onClick={() => setActiveCategory(null)}
            >
              <span>All Categories</span>
            </motion.button>

            {categoriesData.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center h-10 w-32 md:w-40 space-x-2 px-3 py-1 text-xs md:text-sm rounded-md ${category.color} ${isDarkMode ? 'dark' : ''} text-white shadow-md hover:opacity-80 whitespace-nowrap`}
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
        {/* Display Products for the selected category */}
<div className={`mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
  {paginatedProducts.map((product) => (
    <motion.div
      key={product.id}
      className={`p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'} hover:shadow-xl`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >

      {/* Product Image */}
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Name */}
      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gradient' : 'text-black'} mb-2`}>
        {product.name}
      </h3>

      {/* Product Description */}
      <p className={`text-sm ${isDarkMode ? 'text-gradient' : 'text-gray-800'} mb-2 h-10`}>
        {product.description}
      </p>

      {/* Product Price */}
      <p className={`text-xl font-bold ${isDarkMode ? 'text-gradient' : 'text-gray-800'} mb-4`}>
        {product.price}
      </p>

      {/* Rent Now Button with Hover Effect */}
      <motion.button
        className={`w-full py-2 px-4 rounded-md shadow-lg text-xs transition-all ease-in-out duration-200 ${isDarkMode ? 'bg-gradient-to-r from-green-500 to-blue-600' : 'bg-gradient-to-r from-green-400 to-blue-500'} text-white hover:from-blue-500 hover:to-green-400`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Rent Now
      </motion.button>
    </motion.div>
  ))}
</div>


        {/* Pagination Controls with Slide-in Animation */}
        <div className="mt-6 flex justify-center space-x-4">
          <motion.button
            className={`h-10 w-20 text-sm ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
              className={`h-10 w-10 text-sm rounded-md ${currentPage === index + 1 ? (isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white') : (isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800')}`}
              onClick={() => goToPage(index + 1)}
              whileHover={{ scale: 1.2 }} // Hover effect for page numbers
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.button>
          ))}

          <motion.button
            className={`h-10 w-20 text-sm ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
