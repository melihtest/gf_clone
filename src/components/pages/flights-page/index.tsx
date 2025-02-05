import SearchBox from "./search-box";
import { SkeletonCard } from "@/components/molecules/skeleton-card";
import flightsTop from "@/assets/svgs/flights-top.svg";
import mapImage from "@/assets/images/staticmap.png";
import { Button } from "@/components/atoms/button";
import { useNavigate } from "react-router";
import { AppRoute } from "@/enums";

export default function FlightsPage() {
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate(`/${AppRoute.EXPLORE}`);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-330 max-w-full h-full flex flex-col items-center gap-4">
        <div className="relative max-w-full min-w-full flex flex-col items-center">
          <img src={flightsTop} />
          <h1 className="absolute bottom-0 text-4xl lg:text-6xl md:text-5xl">
            Flights
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center max-w-240 w-110 md:w-180 lg:w-240">
          <SearchBox />
          <div className="w-full mt-2"></div>
          <Button
            onClick={handleMapClick}
            className="relative w-fit h-fit p-0 rounded-2xl overflow-hidden"
          >
            <img
              className="hover:bg-red-400 hover:brightness-80"
              src={mapImage}
            />
            <Button className="absolute bg-slate-50 hover:bg-slate-100 rounded-full px-6">
              <h1 className="text-blue-500 font-semibold">
                Explore destinations
              </h1>
            </Button>
          </Button>
          <div className="flex w-full gap-4 md:gap-10 flex-col md:flex-row ">
            <SkeletonCard className="flex-1" />
            <SkeletonCard className="flex-1" />
            <SkeletonCard className="flex-1" />
            <SkeletonCard className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
