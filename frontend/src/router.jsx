import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/User";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/user" replace />,
      },
      {
        path: "/user",
        element: <Users />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;