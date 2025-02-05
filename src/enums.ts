export enum AppRoute {
  FLIGHTS = "flights",
  TRAVEL = "travel",
  EXPLORE = "explore",
  HOTELS = "hotels",
}

export enum QueryParameter {
  TRIP_TYPE = "trip_type",
  TRAVEL_CLASS = "travel_class",
}

export enum TravelClass {
  ECONOMY = "economy",
  PREMIUM_ECONOMY = "premium_economy",
  BUSINESS = "business",
  FIRST_CLASS = "first",
}

// TODO: move text enums to i18next translation files

export enum TravelClassText {
  economy = "Economy",
  premium_economy = "Premium Economy",
  business = "Business",
  first = "First Class",
}

export enum TripType {
  ROUND = "round_trip",
  ONE_WAY = "one_way",
  MULTI_CITY = "multi_city",
}

export enum TripTypeText {
  round_trip = "Round Trip",
  one_way = "One Way",
  multi_city = "Multi City",
}
