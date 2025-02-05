import { MouseEvent, useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import IncrementButton from "./increment-button";
import expandIcon from "@/assets/svgs/expand-icon.svg";

enum ButtonPurpose {
  ADD_ADULT = "add-adult",
  REMOVE_ADULT = "remove-adult",
  ADD_CHILD = "add-child",
  REMOVE_CHILD = "remove-child",
  ADD_INFANT_SEATED = "add-infant-seated",
  REMOVE_INFANT_SEATED = "remove-infant-seated",
  ADD_INFANT_LAP = "add-infant-lap",
  REMOVE_INFANT_LAP = "remove-infant-lap",
}

export default function PersonSelectionDropdown() {
  const [counts, setCounts] = useState({
    adult: 1,
    children: 0,
    infantSeat: 0,
    infantLap: 0,
  });
  const oldState = useRef(counts);
  const [isOpen, setIsOpen] = useState(false);

  const handleCancelButtonClick = () => {
    setCounts({ ...oldState.current });
    setIsOpen(false);
  };

  const handleDoneButtonClick = () => {
    oldState.current = { ...counts };
    setIsOpen(false);
  };

  const handleIncrementButtonClick = (e: MouseEvent) => {
    switch ((e.target as Element).id) {
      case ButtonPurpose.ADD_ADULT:
        setCounts({
          ...counts,
          adult: counts.adult + 1,
        });
        break;
      case ButtonPurpose.REMOVE_ADULT:
        setCounts({
          ...counts,
          adult: counts.adult - 1,
        });
        break;
      case ButtonPurpose.ADD_CHILD:
        setCounts({
          ...counts,
          children: counts.children + 1,
        });
        break;
      case ButtonPurpose.REMOVE_CHILD:
        setCounts({
          ...counts,
          children: counts.children - 1,
        });
        break;
      case ButtonPurpose.ADD_INFANT_SEATED:
        setCounts({
          ...counts,
          infantSeat: counts.infantSeat + 1,
        });
        break;
      case ButtonPurpose.REMOVE_INFANT_SEATED:
        setCounts({
          ...counts,
          infantSeat: counts.infantSeat - 1,
        });
        break;
      case ButtonPurpose.ADD_INFANT_LAP:
        setCounts({
          ...counts,
          infantLap: counts.infantLap + 1,
        });
        break;
      case ButtonPurpose.REMOVE_INFANT_LAP:
        setCounts({
          ...counts,
          infantLap: counts.infantLap - 1,
        });
        break;
    }
  };

  // TODO: add increment / decrement validations

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
          <IoPersonOutline />
          <h1>{Object.values(counts).reduce((acc, elem) => acc + elem)}</h1>
          <img
            src={expandIcon}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="p-4 shadow-lg shadow-gray-400"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h1 className="w-24">Adults</h1>
            <IncrementButton
              disabled={counts.adult === 1}
              id={ButtonPurpose.REMOVE_ADULT}
              onClick={handleIncrementButtonClick}
            >
              <FaMinus color="blue" />
            </IncrementButton>
            <h1>{counts.adult}</h1>
            <IncrementButton
              id={ButtonPurpose.ADD_ADULT}
              onClick={handleIncrementButtonClick}
            >
              <FaPlus color="blue" />
            </IncrementButton>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-24">
              <h1>Children</h1>
              <h1 className="text-xs">Aged 2-11</h1>
            </div>
            <IncrementButton
              disabled={counts.children === 0}
              id={ButtonPurpose.REMOVE_CHILD}
              onClick={handleIncrementButtonClick}
            >
              <FaMinus color="blue" />
            </IncrementButton>
            <h1>{counts.children}</h1>
            <IncrementButton
              id={ButtonPurpose.ADD_CHILD}
              onClick={handleIncrementButtonClick}
            >
              <FaPlus color="blue" />
            </IncrementButton>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-24">
              <h1>Infant</h1>
              <h1 className="text-xs">In seat</h1>
            </div>
            <IncrementButton
              disabled={counts.infantSeat === 0}
              id={ButtonPurpose.REMOVE_INFANT_SEATED}
              onClick={handleIncrementButtonClick}
            >
              <FaMinus color="blue" />
            </IncrementButton>
            <h1>{counts.infantSeat}</h1>
            <IncrementButton
              id={ButtonPurpose.ADD_INFANT_SEATED}
              onClick={handleIncrementButtonClick}
            >
              <FaPlus color="blue" />
            </IncrementButton>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-24">
              <h1>Infant</h1>
              <h1 className="text-xs">In lap</h1>
            </div>
            <IncrementButton
              disabled={counts.infantLap === 0}
              id={ButtonPurpose.REMOVE_INFANT_LAP}
              onClick={handleIncrementButtonClick}
            >
              <FaMinus color="blue" />
            </IncrementButton>
            <h1>{counts.infantLap}</h1>
            <IncrementButton
              id={ButtonPurpose.ADD_INFANT_LAP}
              onClick={handleIncrementButtonClick}
            >
              <FaPlus color="blue" />
            </IncrementButton>
          </div>
          <div className="flex justify-end gap-4">
            <Button onClick={handleCancelButtonClick} variant="ghost">
              <h1 className="text-blue-700 font-semibold">Cancel</h1>
            </Button>
            <Button onClick={handleDoneButtonClick} variant="ghost">
              <h1 className="text-blue-700 font-semibold">Done</h1>
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
