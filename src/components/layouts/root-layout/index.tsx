import { Outlet } from "react-router";
import TopNavigationBar from "./top-navigation-bar";
import SideNavigationBar from "./side-navigation-bar";
import useCloseNavBarOnScroll from "./useCloseNavBarOnScroll";

export default function RootLayout() {
  useCloseNavBarOnScroll();
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigationBar />
      <div className="flex flex-1">
        <SideNavigationBar />
        <Outlet />
      </div>
    </div>
  );
}
