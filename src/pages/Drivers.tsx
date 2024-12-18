import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import YearSelector from '../components/common/YearSelector';
import LoadingSpinner from '../components/common/LoadingSpinner';
import DriverStandingsTable from '../components/drivers/DriverStandingsTable';
import { useDriverStandings } from '../hooks/useDriverStandings';

const Drivers = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  const { data: standings, isLoading } = useDriverStandings(selectedYear);

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <PageHeader
          title="Driver Standings"
          description="View Formula 1 driver championship standings by season"
        />
        <YearSelector
          selectedYear={selectedYear}
          onChange={setSelectedYear}
        />
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <DriverStandingsTable standings={standings || []} />
        </div>
      )}
    </div>
  );
};

export default Drivers;