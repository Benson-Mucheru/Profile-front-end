import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  json,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getProfiles } from "./Components/Profile_Detail";

//Pages
import Homepage from "./pages/Homepage";
import CreateProfile from "./pages/Create";
import Profilepage from "./pages/Profiles-page";
import ErrorPage from "./pages/Error-page";
import ProfileDetail from "./pages/Profile-detail";

const router = createBrowserRouter([
  /* Homepage path */
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },

  /* Create profile path */
  {
    path: "/create",
    element: <CreateProfile />,
    /* Form submission to the backend */
    action: async ({ request }) => {
      const formData = await request.formData();
      await fetch("http://localhost/Php-server/api.php", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: formData,
      });
      return redirect("/profiles");
    },
  },

  /* Profiles path */
  {
    path: "/profiles",
    element: <Profilepage />,

    /* Fetch data from the database */
    loader: async () => {
      const res = await fetch("http://localhost/Php-server/api.php");
      const data = await res.json();
      return data;
    },
  },

  /* Get individual profile by id */
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
