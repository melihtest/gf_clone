import publishSideBarEvent from "@/events/open-side-bar-event";
import { useEffect } from "react";

export default function useCloseNavBarOnScroll() {
  const closeNavBar = () => {
    publishSideBarEvent(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", closeNavBar);

    return () => {
      document.removeEventListener("scroll", closeNavBar);
    };
  }, []);
}
