'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronDown } from 'lucide-react';
import WaitingList from './WaitlistForm';

const calculateTimeLeft = () => {
  const difference = +new Date("2024-09-10T20:12:00") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const AnimatedCountdownDigit = ({ value, label }) => {
  return (
    <motion.div 
      className="flex flex-col items-center mx-2 sm:mx-4"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        key={value}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {value}
      </motion.div>
      <motion.div 
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 uppercase tracking-wide"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Join Waitlist</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CountDownSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <AnimatedCountdownDigit key={interval} value={timeLeft[interval]} label={interval} />
  ));

  return (
    <div style={{minHeight: 'calc(100vh - 100px)' }} className=" flex flex-col bg-gradient-to-b from-blue-50 to-purple-100">


      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get Ready for Launch
        </motion.h1>
        <div className="flex flex-wrap justify-center mb-12">
          <AnimatePresence>
            {timerComponents.length ? timerComponents : <span className="text-2xl text-gray-800">We&apos;ve Launched!</span>}
          </AnimatePresence>
        </div>
        <motion.button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          Join the Wait List
        </motion.button>

      </main>





      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <WaitingList />
      </Modal>
    </div>
  );
};

export default CountDownSection;