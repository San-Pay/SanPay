import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <section className="pt-32 pb-20 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <motion.span
          variants={itemVariants}
          className="text-sm text-gray-600 mb-4 block"
        >
          Revolutionizing Global Payments
        </motion.span>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-6"
        >
          SEAMLESS MONEY TRANSFER 
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Experience seamless cross-border transactions with instant currency conversion and unmatched security. Your gateway to the future of global finance.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-12"
        >
          <Link to="/testnet">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium group"
          >
            TESTNET
            <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          </Link>
          
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-sm group"
          >
            For individuals
            <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button> */}
        </motion.div>

        <motion.div
          variants={itemVariants}
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