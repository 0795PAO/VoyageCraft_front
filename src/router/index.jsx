import Login from "@/components/login/login";
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
        element: {} /*este va a registro*/
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