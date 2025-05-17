import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Signup from "../pages/signup/signup";
import AddFood from "../pages/AddFood/AddFood";
import RegisterFood from "../pages/RegisterFood/RegisterFood";
import FinishRegisterFood from "../pages/FinishRegisterFood/FinishRegisterFood";
const webPath = {
    login: () => "/login",
    signup: () => "/signup",
    addfood: () => "/addfood",
    registerfood: () => "/register-food/:id",
    finishregisterfood: () => "/finish-register-food",
};
const routes = [
    { path: "*", element: _jsx("div", { children: "404 Not Found" }) },
    {
        path: "/",
        element: _jsx(Root, {}),
        children: [{ path: "home", element: _jsx(Home, {}) }],
    },
    {
        path: webPath.login(),
        element: _jsx(Login, {}),
    },
    {
        path: webPath.signup(),
        element: _jsx(Signup, {}),
    },
    {
        path: webPath.addfood(),
        element: _jsx(AddFood, {}),
    },
    {
        path: webPath.registerfood(),
        element: _jsx(RegisterFood, {}),
    },
    {
        path: webPath.finishregisterfood(),
        element: _jsx(FinishRegisterFood, {}),
    },
];
export const router = createBrowserRouter(routes);
