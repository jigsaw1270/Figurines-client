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
import Errorpage from "../Pages/Home/Shared/Errorpage";
import Home from "../Pages/Home/Home";
import Singletoy from "../Pages/Mainpages/Singletoy";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {  path:'/home',
        element: <Home></Home>

        },
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
            path: '/alltoys',
            element: <Alltoys></Alltoys>
        },
        {
           path : '/alltoys/:id',
           element: <Singletoy></Singletoy>,
           loader:({params}) =>fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]

    
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    }
  ]);

  export default router;