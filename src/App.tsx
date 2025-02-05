import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import RootLayout from "./components/layouts/root-layout";
import FlightsPage from "./components/pages/flights-page";
import TravelPage from "./components/pages/travel-page";
import ExplorePage from "./components/pages/explore-page";
import { AppRoute } from "./enums";
import HotelsPage from "./components/pages/hotels-page";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Navigate to={`/${AppRoute.FLIGHTS}`} />} />
    <Route path={AppRoute.FLIGHTS} element={<FlightsPage />} />
    <Route path={AppRoute.TRAVEL} element={<TravelPage />} />
    <Route path={AppRoute.EXPLORE} element={<ExplorePage />} />
    <Route path={AppRoute.HOTELS} element={<HotelsPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
