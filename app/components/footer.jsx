'use client'
import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook,Tiktok } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white transform -skew-y-6"></div>
        <div className="absolute inset-0 bg-white transform skew-y-6"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              FalconMind
            </h2>
            <p className="text-lg">Empowering your learning and career journey</p>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/falcon-mind/" target="_blank">
                <Linkedin className="w-6 h-6 text-blue-300 hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                </a>
              <a href='https://www.instagram.com/falconmind.official/' target='_blank'>
                <Instagram className="w-6 h-6 text-blue-300 hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
              </a>
              <a href='https://www.facebook.com/falconmind.official/' target='_blank'>
                    <Facebook className="w-6 h-6 text-blue-300 hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
              </a>
                <a href='https://www.tiktok.com/@falconmind7' target='_blank'>
                    <Tiktok className="w-6 h-6 text-blue-300 hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                </a>

            </div>
        </div>
       </div>
          


        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center text-sm">
          <p>&copy; 2024 FalconMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;