import Login from "@/components/login/login";
import FormateForm from "@/components/signUp/form/FormateForm";
import SignUp from "@/components/signUp/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {

    element: <PublicRoute />,
    children: [
        {
            path: '/',
            element: <Navigate to='/login' />
        },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp/> /*este va a registro*/
      },
    ],
  },
  {
    elemnt: <ProtectedRoute/>,
    children: [
      {
        path: "/preferences",
        element: {/* Preference formulariio*/ },
      },
      {
        path: "/destinations",
        element:{ /* destinations */}
    },

      
    ],
}

]);

export default router