import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

import { Button } from "@/components/atoms/button";
import google from "@/assets/images/google.png";
import { AppRoute } from "@/enums";
import publishSideBarEvent from "@/events/open-side-bar-event";
import NavigationButton from "@/components/molecules/navigate-button";
import travelIcon from "@/assets/svgs/travel-button.svg";
import exploreIcon from "@/assets/svgs/explore-button.svg";
import flightsIcon from "@/assets/svgs/flights-button.svg";
import hotelsIcon from "@/assets/svgs/hotels-button.svg";
import { useState } from "react";

export default function TopNavigationBar() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const handleBurgerButtonClick = () => {
    if (!sideBarIsOpen) {
      publishSideBarEvent(true);
    }

    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <div className="w-full h-18 border-b-2 flex items-center gap-4">
      <Button
        onClick={handleBurgerButtonClick}
        variant="ghost"
        className="flex items-center justify-center rounded-full ml-4 hover:bg-gray-200 h-12 w-12"
      >
        <RxHamburgerMenu style={{ width: "25px", height: "25px" }} />
      </Button>
      <Link
        to="https://www.google.com"
        className="h-8 flex items-center justify-center"
      >
        <img src={google} alt="google" className="h-6 mt-1.5" />
      </Link>
      <div className="flex items-center gap-2 ml-2">
        <NavigationButton
          iconSrc={travelIcon}
          text="Travel"
          to={AppRoute.TRAVEL}
        />
        <NavigationButton
          iconSrc={exploreIcon}
          text="Explore"
          to={AppRoute.EXPLORE}
        />
        <NavigationButton
          iconSrc={flightsIcon}
          text="Flights"
          to={AppRoute.FLIGHTS}
        />
        <NavigationButton
          iconSrc={hotelsIcon}
          text="Hotels"
          to={AppRoute.HOTELS}
        />
      </div>
    </div>
  );
}
