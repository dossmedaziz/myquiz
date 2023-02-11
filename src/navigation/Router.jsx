import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/auth";
import Login from "../pages/auth/login/Login";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <h1>register</h1>,
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
