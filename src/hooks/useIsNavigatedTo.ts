import { useEffect, useState } from "react";

import { AppRoute } from "@/enums";
import { useLocation } from "react-router";

export default function useIsNavigatedTo(route: AppRoute) {
  const [isSame, setIsSame] = useState(false);
  const currentLocation = useLocation();

  useEffect(() => {
    if (currentLocation.pathname.startsWith(`/${route}`)) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  }, [currentLocation, route]);

  return isSame;
}
