import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Layout from "../pages/layout";
import { GuestGuard , AuthGuard } from "../guards";
import {GUESTPATHS ,AUTHPATHS } from "./paths";
import Dashboard from "../pages/dashboard";

const routes = createBrowserRouter([
  {
    path: "auth",
    element: (
      <GuestGuard>
        <Auth />
      </GuestGuard>
    ),
    children: [
      {
        path: GUESTPATHS.LOGIN,
        element: <Login />,
      },
      {
        path: GUESTPATHS.REGISTER,
        element: <Register />,
      },
    ],
  },
  {
    path: "",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: AUTHPATHS.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: AUTHPATHS.SUPPORT,
        element: <h1>Support</h1>,
      },
      {
        path: AUTHPATHS.NOTIFICATIONS,
        element: <h1>Notification</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
const Router = () => {
  return <RouterProvider router={routes} />;
};
export default Router;
