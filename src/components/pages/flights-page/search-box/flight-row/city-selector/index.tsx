import { FocusEvent, MouseEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SlPlane } from "react-icons/sl";

import { Command, CommandInput, CommandList } from "@/components/atoms/command";
import useClosetsAirports from "@/hooks/useClosestAirports";
import { queryAirportsByKey } from "@/components/services/rapidapi/query";

type Props = {
  placeholder: string;
};

export default function CitySelector(props: Props) {
  const { placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);
  const closestAirports = useClosetsAirports();
  const [value, setValue] = useState("");

  const { data: airports, isLoading } = useQuery({
    queryKey: ["search-airports", value],
    queryFn: queryAirportsByKey,
  });

  const handleFocusEvent = (e: FocusEvent) => {
    if (e.type === "focus") {
      setIsOpen(true);
    } else if (e.type === "blur") {
      setIsOpen(false);
    }
  };

  // TODO: fix following
  const handleClick = (e: MouseEvent) => {
    setValue((e.target as Element).id);
    setIsOpen(false);
  };

  console.log(closestAirports);

  return (
    <Command
      className="relative overflow-visible"
      onBlur={handleFocusEvent}
      onFocus={handleFocusEvent}
    >
      <CommandInput
        placeholder={placeholder}
        className="h-12"
        value={value}
        onValueChange={setValue}
      ></CommandInput>
      <CommandList
        className="absolute top-12 w-70 z-20 bg-white"
        hidden={!isOpen}
      >
        {value === "" &&
          closestAirports !== undefined &&
          closestAirports.status &&
          closestAirports.data.nearby.map((airport) => {
            return (
              <div
                onClick={handleClick}
                id={airport.navigation.localizedName}
                key={airport.navigation.entityId}
                className="h-12 flex w-full justify-start gap-4 p-2 pl-4 hover:bg-gray-100 hover:cursor-pointer"
              >
                <SlPlane />
                <h1>{airport.navigation.localizedName}</h1>
              </div>
            );
          })}

        {value !== "" &&
          airports !== undefined &&
          !isLoading &&
          airports.data.map((airport) => {
            return (
              <div
                onClick={handleClick}
                id={airport.navigation.localizedName}
                key={airport.navigation.entityId}
                className="h-12 flex w-full justify-start gap-4 p-2 pl-4 hover:bg-gray-100 hover:cursor-pointer"
              >
                <SlPlane />
                <h1>{airport.navigation.localizedName}</h1>
              </div>
            );
          })}
      </CommandList>
    </Command>
  );
}
