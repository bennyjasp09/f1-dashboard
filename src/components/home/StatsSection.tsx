import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, Users, Timer } from 'lucide-react';

const stats = [
  { icon: Trophy, label: 'Championships', value: '73', color: 'bg-red-500' },
  { icon: Flag, label: 'Grand Prix', value: '1079', color: 'bg-blue-500' },
  { icon: Users, label: 'Drivers', value: '853', color: 'bg-green-500' },
  { icon: Timer, label: 'Fastest Laps', value: '1047', color: 'bg-purple-500' },
];

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl ${stat.color}" />
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`w-8 h-8 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <span className="text-4xl font-display text-gray-900 tracking-tight">{stat.value}</span>
                <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;