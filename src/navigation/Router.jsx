import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Auth from "../pages/auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

const routes = createBrowserRouter([
    {
        path: "auth",
        element: <Auth/>,
        children: [
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <div>hello</div>
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },
]);
const Router = () => {
    return <RouterProvider router={routes}/>;
};
export default Router;
