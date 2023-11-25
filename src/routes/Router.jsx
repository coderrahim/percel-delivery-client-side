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
      element: <Dashboard></Dashboard>,

      children: ([
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
      ])
    }
  ]);

export default Router;