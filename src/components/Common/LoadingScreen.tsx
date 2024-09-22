import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-mono">
      {/* Cloud Animation */}
      <motion.svg
        className="w-20 h-20 mb-6"
        viewBox="0 0 64 64"
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <g>
          <path
            fill="#FFA500" // Orange color for the cloud
            d="M50.2,26.4c-0.4,0-0.7,0-1.1,0c-2.2-9.6-10.1-16.6-19.1-16.6c-8.8,0-16.1,5.8-18.6,13.7C7.5,26,0,32.3,0,40.4 c0,8.5,6.9,15.4,15.4,15.4h34.1c8.5,0,15.4-6.9,15.4-15.4C65,32.3,57.5,26.4,50.2,26.4z"
          />
        </g>
      </motion.svg>

      <div className="flex space-x-2 mb-4">
        {/* Animated Dots with black and white colors */}
        {['bg-white', 'bg-gray-300', 'bg-gray-500'].map((color, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${color}`}
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          />
        ))}
      </div>

      <motion.h2
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Loading, please wait...
      </motion.h2>
    </div>
  );
};

export default LoadingScreen;
