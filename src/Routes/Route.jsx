import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Alltoys from "../Pages/Mainpages/Alltoys";
import Mytoys from "../Pages/Mainpages/Mytoys";
import Addtoys from "../Pages/Mainpages/Addtoys";
import Blogs from "../Pages/Mainpages/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path:'register',
            element: <Register></Register>
        },
        {
            path: '/toys',
            element:<Alltoys></Alltoys>
        },
        {
            path: '/mytoys',
            element: <Mytoys></Mytoys>
        },
        {
            path: '/addtoy',
            element: <Addtoys></Addtoys>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;