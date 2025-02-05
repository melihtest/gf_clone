export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type Airport = {
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: string;
      localizedName: string;
    };
  };
};

export type DetailedAirport = Airport & {
  skyId: string;
  entityId: string;
};

export type GetClosestAirportsResponse = {
  status: boolean;
  timestamp: number;
  data: {
    current: DetailedAirport;
    nearby: Airport[];
  };
};

export type SearchAirportsResponse = {
  status: boolean;
  timestamp: boolean;
  data: DetailedAirport[];
};
