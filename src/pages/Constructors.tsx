import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import YearSelector from '../components/common/YearSelector';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ConstructorStandingsTable from '../components/constructors/ConstructorStandingsTable';
import { useConstructorStandings } from '../hooks/useConstructorStandings';

const Constructors = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  const { data: standings, isLoading } = useConstructorStandings(selectedYear);

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <PageHeader
          title="Constructor Standings"
          description="View Formula 1 constructor championship standings by season"
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
          <ConstructorStandingsTable standings={standings || []} />
        </div>
      )}
    </div>
  );
};

export default Constructors;