import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getProfiles } from "./pages/Profile-detail";

//Pages
import Homepage from "./pages/Homepage";
import CreateProfile from "./pages/Create";
import Profilepage from "./pages/Profiles-page";
import ErrorPage from "./pages/Error-page";
import { ProfileDetail } from "./pages/Profile-detail";

/* import { getUserLoader } from "./Components/Profiles"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <CreateProfile />,
    action: async ({ params, request }) => {
      return redirect("/profiles");
    },
  },
  {
    path: "profiles",
    element: <Profilepage />,
    loader: async () => {
      const res = await fetch("http://localhost/Php-server/api.php");
      const data = await res.json();
      return data;
    },
  },
  {
    path: "profile/:id",
    element: <ProfileDetail />,
    loader: getProfiles,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
