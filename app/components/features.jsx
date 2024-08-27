'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import { Brain, WalletCards, Trophy, Lightbulb, Check, Repeat, ChevronDown } from 'lucide-react';

const features = [
  { title: "AI-Powered Job Matching", icon: Brain, description: "Our advanced AI algorithms analyze your skills, experience, and preferences to find your perfect career match.", color: "#4F46E5" },
  { title: "Adaptive Learning Paths", icon: WalletCards, description: "Personalized learning journeys that evolve with your progress, ensuring you're always challenged and growing.", color: "#10B981" },
  { title: "Gamified Skill Development", icon: Trophy, description: "Level up your skills through engaging challenges, quests, and competitions designed to make learning addictive.", color: "#EC4899" },
  { title: "Smart Mnemonic Generator", icon: Lightbulb, description: "Boost retention with AI-generated mnemonics tailored to your learning style and the content you're mastering.", color: "#F59E0B" },
  { title: "Holistic Progress Tracking", icon: Check, description: "Visualize your growth across multiple dimensions with our comprehensive analytics dashboard.", color: "#3B82F6" },
  { title: "Intelligent Review System", icon: Repeat, description: "Our spaced repetition algorithm ensures you review content at the optimal time for long-term retention.", color: "#14B8A6" }
];

const FeatureCard = ({ feature, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  const titleX = useMotionValue(50);
  const descriptionX = useMotionValue(-50);

  useEffect(() => {
    if (isInView) {
      titleX.set(0);
      descriptionX.set(0);
    } else {
      titleX.set(50);
      descriptionX.set(-50);
    }
  }, [isInView, titleX, descriptionX]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y, rotate }}
      className="flex flex-col items-center justify-center h-screen sticky top-0"
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full mx-4 overflow-hidden"
        initial={{ boxShadow: `0 0 0 0 ${feature.color}` }}
        animate={{ boxShadow: isInView ? `0 0 30px 5px ${feature.color}` : `0 0 0 0 ${feature.color}` }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: isInView ? 1 : 0, rotate: isInView ? 0 : -180 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-6"
        >
          <feature.icon style={{ color: feature.color }} className="w-20 h-20" />
        </motion.div>
        <motion.h3 
          className="text-4xl font-bold mb-4" 
          style={{ color: feature.color, x: titleX }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="text-xl text-gray-600"
          style={{ x: descriptionX }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          {feature.description}
        </motion.p>
      </motion.div>
      <svg className="absolute left-0 w-full h-2 -bottom-1" style={{ zIndex: -1 }}>
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke={feature.color}
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          style={{ pathLength: progress }}
        />
      </svg>
    </motion.div>
  );
};

const ParallaxBackground = ({ scrollYProgress }) => {
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

  return (
    <div className="fixed inset-0 z-[-1]">
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-200 opacity-50" />
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-gradient-to-b from-blue-300 to-purple-400 opacity-10" />
      <motion.div style={{ y: y3 }} className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 opacity-5" />
    </div>
  );
};

const ScrollPrompt = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ChevronDown className="w-10 h-10 text-gray-400" />
    </motion.div>
  );
};

const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [currentFeature, setCurrentFeature] = useState(0);

  // Create an array of progress values for each feature
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(v => {
      const newIndex = Math.min(Math.floor(v * features.length), features.length - 1);
      setCurrentFeature(newIndex);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const progress0 = useTransform(smoothProgress, [0, 1/6], [0, 1]);
  const progress1 = useTransform(smoothProgress, [1/6, 2/6], [0, 1]);
  const progress2 = useTransform(smoothProgress, [2/6, 3/6], [0, 1]);
  const progress3 = useTransform(smoothProgress, [3/6, 4/6], [0, 1]);
  const progress4 = useTransform(smoothProgress, [4/6, 5/6], [0, 1]);
  const progress5 = useTransform(smoothProgress, [5/6, 1], [0, 1]);

  const progressArray = [progress0, progress1, progress2, progress3, progress4, progress5];


  return (
    <div ref={containerRef} className="relative">
      <ParallaxBackground scrollYProgress={smoothProgress} />
      <motion.div 
        className="text-center sticky top-0 z-10 bg-gradient-to-r from-indigo-900 to-purple-900 backdrop-blur-md py-4 px-4 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.h2 
            className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
          Discover Our Features
        </motion.h2>
        <div className="mt-4 flex justify-center space-x-2">
          {features.map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-gray-300"
              animate={{ 
                scale: currentFeature === index ? 1.5 : 1,
                backgroundColor: currentFeature === index ? features[index].color : "#D1D5DB"
              }}
            />
          ))}
        </div>
      </motion.div>
      {features.map((feature, index) => (
        <FeatureCard 
          key={index} 
          feature={feature} 
          progress={progressArray[index]}
        />
      ))}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900 relative overflow-hidden">
        <motion.p 
          className="text-4xl font-bold text-white text-center px-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience the future of learning with our innovative platform
        </motion.p>
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPositionY: ["0%", "100%"],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear"
          }}
        />
      </div>
      <ScrollPrompt />
    </div>
  );
};

export default Features;