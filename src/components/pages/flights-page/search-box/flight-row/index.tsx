import { DatePicker } from "@/components/molecules/date-picker";
import CitySelector from "./city-selector";
import useQueryParameter from "@/hooks/useQueryParameter";
import { QueryParameter, TripType } from "@/enums";

export default function FlightRow() {
  const { parameter } = useQueryParameter(QueryParameter.TRIP_TYPE);

  return (
    <div className="w-full flex items-center gap-2 flex-col md:flex-row">
      <div className="flex-3 flex items-center">
        <div className="flex-1">
          <CitySelector placeholder="Where From" />
        </div>
        <div className="flex-1">
          <CitySelector placeholder="Where To" />
        </div>
      </div>
      <div className="flex-2 flex w-full">
        <DatePicker
          placeHolder="Departure"
          buttonClassName={`h-12 ${
            parameter === TripType.ROUND
              ? "rounded-r-none border-r-0 flex-1"
              : "w-full"
          }`}
        />
        {parameter === TripType.ROUND && (
          <DatePicker
            placeHolder="Return"
            buttonClassName="h-12 rounded-l-none flex-1 border-l-0"
          />
        )}
      </div>
      <div className="rounded-r-none" />
    </div>
  );
}
