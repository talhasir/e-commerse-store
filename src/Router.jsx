import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import GuestUser from "./view/GuestUser";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./view/Dashboard";
import Surveys from "./view/Surveys";
import Default from "./view/Default";
import SurveysView from "./view/SurveysView";

const Routes = createBrowserRouter([
  {
    path: "/regestration",
    element: <GuestUser />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/", element: <Navigate to={"/dashboard"} /> },
      { path: "/surveys", element: <Surveys /> },
      { path: "/surveys/create", element: <SurveysView /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/dashboard"} />,
  },
]);

export default Routes;
