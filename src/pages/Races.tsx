import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import YearSelector from '../components/common/YearSelector';
import LoadingSpinner from '../components/common/LoadingSpinner';
import RaceGrid from '../components/races/RaceGrid';
import { useRaceSchedule } from '../hooks/useRaceSchedule';

const Races = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  const { data: races, isLoading } = useRaceSchedule(selectedYear);

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <PageHeader
          title="Race Calendar"
          description="View Formula 1 race schedule and results by season"
        />
        <YearSelector
          selectedYear={selectedYear}
          onChange={setSelectedYear}
        />
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <RaceGrid races={races || []} />
      )}
    </div>
  );
};

export default Races;