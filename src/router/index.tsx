import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Signup from "../pages/signup/signup";
import AddFood from "../pages/AddFood/AddFood";
import RegisterFood from "../pages/RegisterFood/RegisterFood";
import FinishRegisterFood from "../pages/FinishRegisterFood/FinishRegisterFood";
import FridgeManagement from "../pages/FridgeManagement/FridgeManagement";

const webPath = {
    login: () => "/login",
    signup: () => "/signup",
    addfood: () => "/addfood",
    registerfood: () => "/register-food/:id",
    finishregisterfood: () => "/finish-register-food",
    fridgemanagement: () => "/fridge-management",
};

const routes = [
    { path: "*", element: <div>404 Not Found</div> },
    {
        path: "/",
        element: <Root />,
        children: [{ path: "home", element: <Home /> }],
    },
    {
        path: webPath.login(),
        element: <Login />,
    },
    {
        path: webPath.signup(),
        element: <Signup />,
    },
    {
        path: webPath.addfood(),
        element: <AddFood />,
    },
    {
        path: webPath.registerfood(),
        element: <RegisterFood />,
    },
    {
        path: webPath.finishregisterfood(),
        element: <FinishRegisterFood />,
    },
    {
        path: webPath.fridgemanagement(),
        element: <FridgeManagement />,
    },
];

export const router = createBrowserRouter(routes);
