import { Outlet } from "react-router-dom";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import GuestGuard from "./route-guards/GuestGuard";

const LoginRoutes = {
    path: "/",
    element: (
        <GuestGuard>
            <Outlet />
        </GuestGuard>
    ),
    children: [
        {
            path: "/",
            element: <SignIn />,
        },
        {
            path: "/login",
            element: <SignIn />,
        },
        {
            path: "/register",
            element: <SignUp />,
        },
    ],
};

export default LoginRoutes;
