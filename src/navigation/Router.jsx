import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Layout from "../pages/layout";
import { GuestGuard } from "../guards";

const routes = createBrowserRouter([
  {
    path: "",
    element: (
      <GuestGuard>
        <Auth />
      </GuestGuard>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      {
        path: "", // todo : change the endpoint to dashboard
        element: <h1>Dashboard</h1>,
      },
      {
        path: "support",
        element: <h1>Support</h1>,
      },
      {
        path: "notification",
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
