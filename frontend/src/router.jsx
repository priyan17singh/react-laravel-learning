import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/User',
        element: <User />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;