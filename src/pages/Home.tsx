import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDriverStandings, fetchConstructorStandings } from '../services/api';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ChampionsSection from '../components/home/ChampionsSection';

const currentYear = new Date().getFullYear();

const Home = () => {
  const { data: driverStandings, isLoading: isLoadingDrivers } = useQuery({
    queryKey: ['driverStandings', currentYear],
    queryFn: () => fetchDriverStandings(currentYear)
  });

  const { data: constructorStandings, isLoading: isLoadingConstructors } = useQuery({
    queryKey: ['constructorStandings', currentYear],
    queryFn: () => fetchConstructorStandings(currentYear)
  });

  const isLoading = isLoadingDrivers || isLoadingConstructors;

  const currentChampions = {
    driver: driverStandings?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings?.[0],
    constructor: constructorStandings?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings?.[0]
  };

  return (
    <div className="space-y-12">
      <HeroSection />
      <StatsSection />
      <ChampionsSection 
        driverChampion={currentChampions.driver}
        constructorChampion={currentChampions.constructor}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;