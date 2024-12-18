import { useQuery } from '@tanstack/react-query';
import { fetchRaceSchedule } from '../services/api';

export const useRaceSchedule = (year: number) => {
  return useQuery({
    queryKey: ['raceSchedule', year],
    queryFn: () => fetchRaceSchedule(year),
    select: (data) => data.MRData?.RaceTable?.Races || [],
  });
};