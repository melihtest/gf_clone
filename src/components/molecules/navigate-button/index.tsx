import { useNavigate } from "react-router";

import { Button } from "@/components/atoms/button";
import { AppRoute } from "@/enums";
import useIsNavigatedTo from "@/hooks/useIsNavigatedTo";
import { cn } from "@/lib/utils";

type Props = {
  to: AppRoute;
  text: string;
  iconSrc: string;
  className?: string;
};

export default function NavigationButton(props: Props) {
  const { to, text, iconSrc, className = "" } = props;
  const navigate = useNavigate();
  const isHere = useIsNavigatedTo(to);

  const handleButtonClick = () => {
    navigate(to);
  };

  return (
    <Button
      variant="outline"
      className={cn(
        `shadow-none h-10 px-6 rounded-full ${
          isHere ? "bg-blue-100 hover:bg-blue-200" : "hover:bg-blue-50 bg-none"
        }`,
        className
      )}
      onClick={handleButtonClick}
    >
      <img src={iconSrc} />
      <h1 className="font-bold">{text}</h1>
    </Button>
  );
}
