import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[600px] rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552849397-7a2d7864a9b4?auto=format&fit=crop&q=80&w=2000"
          alt="F1 Racing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-display text-white leading-tight">
              EXPERIENCE THE
              <span className="text-red-500"> THRILL</span>
              <br />
              OF FORMULA 1
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Live standings, race schedules, and comprehensive statistics from the world's most prestigious motorsport championship.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/races"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Calendar className="w-5 h-5" />
                  Race Calendar
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/drivers"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group border border-white/20"
                >
                  <Trophy className="w-5 h-5" />
                  Standings
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;