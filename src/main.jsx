import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { getProfiles } from "./Components/Profile_Detail";

//Pages
import Homepage from "./pages/Homepage";
import CreateProfile from "./pages/Create";
import Profilepage from "./pages/Profiles-page";
import ErrorPage from "./pages/Error-page";
import ProfileDetail from "./pages/Profile-detail";
import Login from "./pages/Login";
import Navbarlayout from "./layout/Navbarlayout";

const router = createBrowserRouter([
  /* Homepage path */

  {
    path: "/",
    element: <Navbarlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Login />,
        /* action: async ({ request }) => {
          const formData = await request.formData();

          await fetch("http://localhost/Php-server/login.php", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: formData,
          });

          return redirect("/create");
        }, */
      },

      {
        path: "create",
        element: <CreateProfile />,
        /* Form submission to the backend */
        action: async ({ request, params }) => {
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

      {
        path: "profiles",
        element: <Profilepage />,
        /* Fetch data from the database */
        loader: async () => {
          const res = await fetch("http://localhost/Php-server/api.php");
          const data = await res.json();
          return data;
        },
      },
      {
        /* Get individual profile by id */
        path: "profile/:id",
        element: <ProfileDetail />,
        loader: getProfiles,
      },
    ],
  },

  /* Login path */
  /* {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
      const formData = await request.formData();
      await fetch("http://localhost/Php-server/login.php", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: formData,
      });
      return redirect("/profiles");
    },
  }, */

  /* Create profile path */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
