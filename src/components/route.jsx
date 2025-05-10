import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technoloy from "./Technology";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },

  { path: "/crew", element: <Crew /> },
  { path: "/technology", element: <Technoloy /> },
];

export default routes;
