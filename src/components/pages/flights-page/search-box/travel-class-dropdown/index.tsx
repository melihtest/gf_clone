import { useEffect, useState } from "react";

import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import expandIcon from "@/assets/svgs/expand-icon.svg";
import useQueryParameter from "@/hooks/useQueryParameter";
import { QueryParameter, TravelClass, TravelClassText } from "@/enums";

export default function TravelClassDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { parameter, updateParameter } = useQueryParameter(
    QueryParameter.TRAVEL_CLASS
  );

  useEffect(() => {
    if (parameter === null) {
      updateParameter(TravelClass.ECONOMY);
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
          <h1>{TravelClassText[parameter as TravelClass]}</h1>
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
          id={TravelClass.ECONOMY}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          Economy
        </DropdownMenuItem>
        <DropdownMenuItem
          id={TravelClass.PREMIUM_ECONOMY}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          Premium Economy
        </DropdownMenuItem>
        <DropdownMenuItem
          id={TravelClass.BUSINESS}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          Business
        </DropdownMenuItem>
        <DropdownMenuItem
          id={TravelClass.FIRST_CLASS}
          onSelect={handleSelect}
          className="h-12 text-md"
        >
          First
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
