const BASE_URL = 'https://ergast.com/api/f1';

export const fetchDriverStandings = async (year: number) => {
  const response = await fetch(`${BASE_URL}/${year}/driverStandings.json`);
  return response.json();
};

export const fetchConstructorStandings = async (year: number) => {
  const response = await fetch(`${BASE_URL}/${year}/constructorStandings.json`);
  return response.json();
};

export const fetchRaceResults = async (year: number) => {
  const response = await fetch(`${BASE_URL}/${year}/results.json`);
  return response.json();
};

export const fetchDrivers = async () => {
  const response = await fetch(`${BASE_URL}/drivers.json`);
  return response.json();
};

export const fetchRaceSchedule = async (year: number) => {
  const response = await fetch(`${BASE_URL}/${year}.json`);
  return response.json();
};

export const fetchConstructors = async () => {
  const response = await fetch(`${BASE_URL}/constructors.json`);
  return response.json();
};