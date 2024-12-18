import { useQuery } from '@tanstack/react-query';
import { fetchDriverStandings } from '../services/api';

export const useDriverStandings = (year: number) => {
  return useQuery({
    queryKey: ['driverStandings', year],
    queryFn: () => fetchDriverStandings(year),
    select: (data) => data.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [],
  });
};