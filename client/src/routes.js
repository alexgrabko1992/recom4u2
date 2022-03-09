import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const publicRoutes = [
  {
    path: "https://recom4u.herokuapp.com/",
    Component: <Home />,
  },
];

export const privateRoutes = [
  {
    path: "https://recom4u.herokuapp.com/",
    Component: <Home />,
  },
  {
    path: "https://recom4u.herokuapp.com/profile",
    Component: <Profile />,
  },
];
