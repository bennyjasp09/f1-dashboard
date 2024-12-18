import React from 'react';
import { Race } from '../../types';
import RaceCard from './RaceCard';

interface RaceGridProps {
  races: Race[];
}

const RaceGrid = ({ races }: RaceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {races.map((race) => (
        <RaceCard key={`${race.season}-${race.round}`} race={race} />
      ))}
    </div>
  );
};

export default RaceGrid;