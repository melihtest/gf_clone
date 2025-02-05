import { useCallback, useEffect, useState } from "react";

import { Sheet, SheetContent } from "@/components/atoms/sheet";
import {
  SideBarEvent,
  subscribe as subscribeToSideBarEvent,
  unsubscribe as unsubscribeFromSideBarEvent,
} from "@/events/open-side-bar-event";
import NavigationButton from "@/components/molecules/navigate-button";
import { AppRoute } from "@/enums";
import travelIcon from "@/assets/svgs/travel-button.svg";
import exploreIcon from "@/assets/svgs/explore-button.svg";
import flightsIcon from "@/assets/svgs/flights-button.svg";
import hotelsIcon from "@/assets/svgs/hotels-button.svg";

export default function SideNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setContainer(
      document.getElementById("side-nav-container") as HTMLDivElement
    );
  }, []);

  const handleSideBarEvent = useCallback(
    (e: SideBarEvent) => {
      const _isOpen = e.detail.open ?? !isOpen;

      setIsOpen(_isOpen);
    },
    [isOpen]
  );

  useEffect(() => {
    subscribeToSideBarEvent(handleSideBarEvent);

    return () => {
      unsubscribeFromSideBarEvent(handleSideBarEvent);
    };
  }, [handleSideBarEvent]);

  return (
    <div
      id="side-nav-container"
      className="h-full w-full absolute pointer-events-none"
    >
      <Sheet onOpenChange={setIsOpen} modal={false} open={isOpen}>
        <SheetContent
          hideClose
          container={container}
          className="absolute p-0 flex gap-0 flex-col w-70 pointer-events-auto"
          side="left"
        >
          <NavigationButton
            iconSrc={travelIcon}
            text="Travel"
            to={AppRoute.TRAVEL}
            className="h-16 rounded-l-none mr-4 border-none"
          />
          <NavigationButton
            iconSrc={exploreIcon}
            text="Explore"
            to={AppRoute.EXPLORE}
            className="h-16 rounded-l-none mr-4 border-none"
          />
          <NavigationButton
            iconSrc={flightsIcon}
            text="Flights"
            to={AppRoute.FLIGHTS}
            className="h-16 rounded-l-none mr-4 border-none"
          />
          <NavigationButton
            iconSrc={hotelsIcon}
            text="Hotels"
            to={AppRoute.HOTELS}
            className="h-16 rounded-l-none mr-4 border-none"
          />
          <div className="flex flex-col items-center justify-center h-full w-full pointer-events-auto"></div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
