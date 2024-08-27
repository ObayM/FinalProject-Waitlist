'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle submission logic here
      setIsSubmitted(true);
      
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        ease: "anticipate",
        duration: 0.5
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.05,
      boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 17 }
    },
    blur: { 
      scale: 1,
      boxShadow: "none",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <AnimatePresence>
      
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formVariants}
        >
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Join Our Waitlist</h2>
              <div className="mb-6 relative">
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                  required
                />
                <AlertCircle className="absolute right-3 top-3 text-blue-500" size={24} />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Join Now
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full text-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Thank You!
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We've added you to our waitlist. We'll be in touch soon!
              </motion.p>
            </motion.div>
          )}
        </motion.div>
    </AnimatePresence>
  );
};

export default WaitingList;