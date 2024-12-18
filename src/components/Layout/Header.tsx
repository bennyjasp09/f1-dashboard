import React from 'react';
import { Trophy, Users, Building2, Flag, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/drivers', icon: Users, label: 'Drivers' },
    { path: '/constructors', icon: Building2, label: 'Constructors' },
    { path: '/races', icon: Flag, label: 'Races' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Trophy className="h-8 w-8 text-red-600" />
            <span className="text-xl font-display tracking-wider">
              F1 DASHBOARD
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to={path}
                  className={`nav-link flex items-center space-x-2 hover:text-red-500 transition-colors ${
                    isActive(path) ? 'text-red-500' : ''
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;