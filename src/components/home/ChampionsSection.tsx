import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

interface ChampionsSectionProps {
  driverChampion: any;
  constructorChampion: any;
  isLoading: boolean;
}

const ChampionsSection = ({ driverChampion, constructorChampion, isLoading }: ChampionsSectionProps) => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-display text-white mb-12 text-center"
        >
          CURRENT CHAMPIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="h-10 w-10 text-red-500" />
              <h3 className="text-2xl font-display text-white">Driver Champion</h3>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : driverChampion ? (
              <div className="space-y-2">
                <p className="text-2xl text-white font-medium">
                  {driverChampion.Driver?.givenName}{' '}
                  {driverChampion.Driver?.familyName}
                </p>
                <p className="text-red-400">
                  {driverChampion.Constructor?.name}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-white">
                    <span className="text-3xl font-display">{driverChampion.points}</span>
                    <span className="text-sm ml-1">PTS</span>
                  </div>
                  <div className="text-white">
                    <span className="text-3xl font-display">{driverChampion.wins}</span>
                    <span className="text-sm ml-1">Wins</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No data available</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="h-10 w-10 text-red-500" />
              <h3 className="text-2xl font-display text-white">Constructor Champion</h3>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : constructorChampion ? (
              <div className="space-y-2">
                <p className="text-2xl text-white font-medium">
                  {constructorChampion.Constructor?.name}
                </p>
                <p className="text-red-400">
                  {constructorChampion.Constructor?.nationality}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-white">
                    <span className="text-3xl font-display">{constructorChampion.points}</span>
                    <span className="text-sm ml-1">PTS</span>
                  </div>
                  <div className="text-white">
                    <span className="text-3xl font-display">{constructorChampion.wins}</span>
                    <span className="text-sm ml-1">Wins</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No data available</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChampionsSection;