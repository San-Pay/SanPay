import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ToolTip = ({label,showTooltip,setShowTooltip}) => {
    
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setShowTooltip(true);
    //     }, 1000); // Show tooltip after 1 second
    //     return () => clearTimeout(timer);
    //   }, []);
      
        return (
             <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              // className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-2xl shadow-lg  before:content-[''] before:absolute before:top-full before:left-1/3 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-black">
              <span>{label}</span>
                </motion.div>
  )
}

export default ToolTip
