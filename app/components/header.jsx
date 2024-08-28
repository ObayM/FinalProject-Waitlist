'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="py-4 bg-gradient-to-r from-indigo-900 to-purple-900"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/api/placeholder/50/50" alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-white text-2xl font-bold">FalconMind</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-lg font-semibold hidden sm:block"
        >
          Empowering Your Future
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;