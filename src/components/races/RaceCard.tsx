import React from 'react';
import { Race } from '../../types';
import { format } from 'date-fns';
import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface RaceCardProps {
  race: Race;
  index: number;
}

const RaceCard = ({ race, index }: RaceCardProps) => {
  const raceDate = new Date(`${race.date}${race.time ? 'T' + race.time : ''}`);
  const isUpcoming = raceDate > new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={`card-hover bg-white rounded-xl shadow-md p-6 ${
        isUpcoming ? 'border-l-4 border-red-500' : ''
      }`}
    >
      <h3 className="text-2xl font-display tracking-wide mb-4">{race.raceName}</h3>
      
      <div className="space-y-3">
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-gray-600"
        >
          <MapPin className="h-5 w-5 text-red-500" />
          <span className="font-medium">{race.Circuit.circuitName}</span>
        </motion.div>
        
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-gray-600"
        >
          <Calendar className="h-5 w-5 text-red-500" />
          <span>{format(raceDate, 'PPP')}</span>
        </motion.div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RaceCard;