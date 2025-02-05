import { useEffect, useState } from "react";
import { TbArrowsRightLeft } from "react-icons/tb";

import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import expandIcon from "@/assets/svgs/expand-icon.svg";
import useQueryParameter from "@/hooks/useQueryParameter";
import { QueryParameter, TripType, TripTypeText } from "@/enums";

export default function TripTypeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { parameter, updateParameter } = useQueryParameter(
    QueryParameter.TRIP_TYPE
  );

  useEffect(() => {
    if (parameter === null) {
      updateParameter(TripType.ROUND);
    }
  }, [parameter, updateParameter]);

  const handleSelect = (e: Event) => {
    updateParameter((e.target as Element).id);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className={`m-2 shadow-none ${
            isOpen
              ? "bg-blue-100 border-b border-blue-400 rounded-b-none border-2 border-t-0 border-x-0"
              : "border-none"
          }`}
        >
          <TbArrowsRightLeft />
          <h1>{parameter !== null && TripTypeText[parameter as TripType]}</h1>
          <img
            src={expandIcon}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 shadow-lg shadow-gray-400">
        <DropdownMenuItem
          id={TripType.ROUND}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          Round Trip
        </DropdownMenuItem>
        <DropdownMenuItem
          id={TripType.ONE_WAY}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          One Way
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={handleSelect}
          id={TripType.MULTI_CITY}
          className="h-12 text-md"
        >
          Multi City
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
