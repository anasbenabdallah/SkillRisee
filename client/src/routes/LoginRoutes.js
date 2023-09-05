import { lazy } from "react";

// ==============================|| PROJECT IMPORT ||============================== //

import Loadable from "../Components/PageLoading/Loadable";
import MinimalLayout from "../Layouts/MinimalLayout";

// ==============================|| AUTH Pages ||============================== //

const Register = Loadable(
  lazy(() => import("../Pages/Authentification/Register"))
);
const Login = Loadable(lazy(() => import("../Pages/Authentification/Login")));
const ForgetPassword = Loadable(
  lazy(() => import("../Pages/Authentification/ForgetPassword"))
);

const ResetPassword = Loadable(
  lazy(() => import("../Pages/Authentification/ResetPassword"))
);
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "forgetpassword",
      element: <ForgetPassword />,
    },
    {
      path: "reset-password/:resetToken",
      element: <ResetPassword />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ],
};

export default LoginRoutes;
