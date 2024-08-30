import Login from "@/components/login/login";
import FormateForm from "@/components/signUp/form/FormateForm";
import SignUp from "@/components/signUp/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/components/home/home";
import ItineraryCard from "@/components/itinerary/ItineraryCard";

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
        element:{ /* destinations */}
    },
    {
      path: "/itinerary",
      element:<ItineraryCard/>
  },
    ],
  }

]);

export default router