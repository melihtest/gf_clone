import { GetClosestAirportsResponse, SearchAirportsResponse } from "@/types";
import axios from "axios";

const client = axios.create({
  baseURL: "https://sky-scrapper.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  },
});

export const getClosestAirports = async (
  latitude: number,
  longitude: number
) => {
  const response = await client.get<GetClosestAirportsResponse>(
    `/api/v1/flights/getNearByAirports?lat=${latitude}&lng=${longitude}`
  );

  return response.data;
};

export const searchAirports = async (queryParam: string) => {
  const response = await client.get<SearchAirportsResponse>(
    `/api/v1/flights/searchAirport?query=${queryParam}`
  );

  return response.data;
};
