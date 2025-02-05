import { queryNearbyAirports } from "@/components/services/rapidapi/query";
import { Coordinate } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useClosetsAirports() {
  const [userLocation, setUserLocation] = useState<Coordinate>({
    latitude: 0,
    longitude: 0,
  });

  const { data } = useQuery({
    queryKey: [
      "closest-airports",
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      },
    ],
    queryFn: queryNearbyAirports,
  });

  useEffect(() => {
    const handleCurrentPositionEvent = (e: GeolocationPosition) => {
      setUserLocation(e.coords);
    };

    navigator.geolocation.getCurrentPosition(handleCurrentPositionEvent);
  }, []);

  return data;
}
