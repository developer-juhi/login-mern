// import ErrorPage from "../pages/view/ErrorPage";
import Logout from "../pages/view/Logout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/view/Login";
import ResetPassword from "../pages/view/ResetPassword";
import ChangePassword from "../pages/view/ChangePassword";
import Profile from "../pages/view/Profile";

const routes = [
    {
        path: "/logout",
        exact: true,
        auth: true,
        component: <Logout title="Logout" />
    },
    {
        path: "/profile",
        exact: true,
        auth: true,
        component: <Profile title="Profile" />
    },
    {
        path: "/change-password",
        exact: true,
        auth: true,
        component: <ChangePassword title="Change Password" />
    },
    {
        path: "/dashboard",
        exact: true,
        auth: true,
        component: <Dashboard title="Dashboard" />
    },
    {
        path: "/login",
        exact: true,
        auth: false,
        component: <Login title="login" />
    },
    {
        path: "/reset-password/:tokens",
        exact: true,
        auth: false,
        component: <ResetPassword title="Reset Password" />
    },
   
    {
        path: "/",
        exact: true,
        auth: false,
        component: <Dashboard title="Dashboard" />

        // component: <Login title="Login" />
    },
    // {
    //     path: "*",
    //     exact: true,
    //     auth: false,
    //     component: <ErrorPage title="Error 404" />
    // },

]

export default routes;