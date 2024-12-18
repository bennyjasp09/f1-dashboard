import { useQuery } from '@tanstack/react-query';
import { fetchConstructorStandings } from '../services/api';

export const useConstructorStandings = (year: number) => {
  return useQuery({
    queryKey: ['constructorStandings', year],
    queryFn: () => fetchConstructorStandings(year),
    select: (data) => data.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [],
  });
};