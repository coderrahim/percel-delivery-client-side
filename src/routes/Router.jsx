import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import Booking from "../Pages/Dashboard/Users/Booking/Booking";
import MyPercel from "../Pages/Dashboard/Users/MyPercel/MyPercel";
import MyProfile from "../Pages/Dashboard/Users/MyProfile/MyProfile";
import UpdateParcel from "../Pages/Dashboard/Users/MyPercel/UpdateParcel";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AllDeliveryMan from "../Pages/Dashboard/Admin/AllDeliveryMan/AllDeliveryMan";
import AllParcel from "../Pages/Dashboard/Admin/AllParcel/AllParcel";
import UserDashboard from "../Pages/Dashboard/Users/UserDashboard";
import Delivery from "../Pages/Dashboard/Delivery/Delivery";
import MyDelivery from "../Pages/Dashboard/Delivery/MyDelivery/MyDelivery";
import MyReview from "../Pages/Dashboard/Delivery/MyReview/MyReview";
import PrivateRoute from "./PrivateRoute";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,

      children: ([
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
      ])
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

      children: ([
        {
          path: 'user',
          element: <UserDashboard></UserDashboard>
        },
        {
          path: 'book-parcel',
          element: <Booking></Booking>
        },
        {
          path: 'my-parcel',
          element: <MyPercel></MyPercel>
        },
        {
          path: 'my-profile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'update/:id',
          element: <UpdateParcel></UpdateParcel>,
          loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
        },

        // ADMIN  MENUS
        {
          path: 'admin',
          element: <AdminDashboard></AdminDashboard>
        },
        {
          path: 'allparcel',
          element: <AllParcel></AllParcel>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'alldeliveryman',
          element: <AllDeliveryMan></AllDeliveryMan>
        },

        // DELIVERY M E N U S
        {
          path: 'delivery',
          element: <Delivery></Delivery>
        },
        {
          path: 'delivery-list',
          element: <MyDelivery></MyDelivery>
        },
        {
          path: 'my-review',
          element: <MyReview></MyReview>
        },
      ])
    }
  ]);

export default Router;