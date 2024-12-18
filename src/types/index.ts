export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface Race {
  season: string;
  round: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    circuitName: string;
    Location: {
      country: string;
      locality: string;
    };
  };
  date: string;
  time?: string;
}

export interface Standing {
  position: string;
  points: string;
  wins: string;
  Driver?: Driver;
  Constructor?: Constructor;
}