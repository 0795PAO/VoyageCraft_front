import Login from "@/components/login/login";
import SignUp from "@/components/signUp/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/components/home/home";
import DestinationPage from "@/pages/destinationPage";

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
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/home",
        element:  <Home/>
      },
      {
        path: "/destinations",
        element: <DestinationPage/>
    },

      
    ],
}

]);

export default router