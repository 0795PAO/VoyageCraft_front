import Login from "@/components/login/login";
import SignUp from "@/components/signUp/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
<<<<<<< HEAD
import Home from "@/components/home/home";
import ItineraryCard from "@/components/itinerary/ItineraryCard";
=======
import HomePage from "@/pages/homePage";
import DestinationPage from "@/pages/destinationPage";
>>>>>>> bf7e987326a3b85c79e45cbc9492295fcb1e6b9d

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
        element: <SignUp />
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element:  <HomePage/>
      },
      {
        path: "/destinations",
<<<<<<< HEAD
        element:{ /* destinations */}
    },
    {
      path: "/itinerary",
      element:<ItineraryCard/>
  },
    ],
  }
=======
        element: <DestinationPage/>
      },

      
    ],
  }

>>>>>>> bf7e987326a3b85c79e45cbc9492295fcb1e6b9d

]);

export default router