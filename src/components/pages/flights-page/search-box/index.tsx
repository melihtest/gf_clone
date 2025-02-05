import TripTypeDropdown from "./trip-type-dropdown";
import PersonSelectionDropdown from "./person-selection-dropdown";
import TravelClassDropdown from "./travel-class-dropdown";
import { Button } from "@/components/atoms/button";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import FlightRow from "./flight-row";
import useQueryParameter from "@/hooks/useQueryParameter";
import { AppRoute, QueryParameter, TripType } from "@/enums";
import { useNavigate } from "react-router";

export default function SearchBox() {
  const { parameter } = useQueryParameter(QueryParameter.TRIP_TYPE);
  const navigate = useNavigate();

  const handleSearchButtonPress = () => {
    navigate(`/${AppRoute.EXPLORE}`);
  };

  return (
    <div className="w-full rounded-lg p-4 shadow-[0_3px_5px_2px_#bbbbbb] flex flex-col">
      <div className="flex">
        <TripTypeDropdown />
        <PersonSelectionDropdown />
        <TravelClassDropdown />
      </div>
      <FlightRow />
      {parameter === TripType.MULTI_CITY && (
        <div className="mt-4 ml-4">
          <Button className="bg-blue-500 w-30 h-10 rounded-full">
            Add flight
          </Button>
        </div>
      )}
      <div className="w-full flex justify-center translate-y-9">
        <Button
          onClick={handleSearchButtonPress}
          className="bg-blue-500 flex items-center h-10 rounded-full shadow-[1px_1px_5px_1px_#999999]"
        >
          <PiMagnifyingGlassBold style={{ width: "25px", height: "25px" }} />
          Search
        </Button>
      </div>
    </div>
  );
}
