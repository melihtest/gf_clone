import { QueryFunctionContext } from "@tanstack/react-query";

import { getClosestAirports, searchAirports } from "./api";

export const queryNearbyAirports = async ({
  queryKey,
}: QueryFunctionContext<[string, { latitude: number; longitude: number }]>) => {
  const [_, parameters] = queryKey;

  return await getClosestAirports(parameters.latitude, parameters.longitude);
};

export const queryAirportsByKey = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const [_, param] = queryKey;

  return await searchAirports(param);
};
