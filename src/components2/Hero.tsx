import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Show tooltip after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        className="container mx-auto px-4"
      >
        <motion.span className="text-sm text-gray-600 mb-4 block">
          Revolutionizing Global Payments
        </motion.span>

        <motion.h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-6">
          SEAMLESS MONEY TRANSFER
        </motion.h1>

        <motion.p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience seamless cross-border transactions with instant currency
          conversion and unmatched security.
        </motion.p>

        {/* Buttons Section */}
        

        <div className="relative flex justify-center gap-4 mb-12">

                {/* Tooltip with Animated Arrow */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              // className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-2xl shadow-lg  before:content-[''] before:absolute before:top-full before:left-1/3 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-black">
              <span>Click to Try Testnet!</span>
              </motion.div>
          )}

          {/* Testnet Button */}

          <Link to="/testnet" className="no-underline">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg transition-all duration-300 text-white 
              bg-gradient-to-r from-blue-700 to-blue-400 
              hover:bg-gradient-to-l hover:from-blue-800 hover:to-blue-500"
              onClick={() => setShowTooltip(false)} // Hide tooltip on click
            >
              TESTNET
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="w-6 h-6 flex items-center ml-2"
              >
              {/* <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /> */}
              <span className="text-2xl">↣</span>
              </motion.div>


              {/* Glowing Border Effect */}
              {showTooltip && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-75 animate-pulse"
                />
              )}
            </motion.button>
          </Link>
        </div>

        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200"
            alt="Dashboard Preview"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
