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
import Updatetoys from "../Pages/Mainpages/Updatetoys";
import PrivateRoute from "./Privateroute";


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
            element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
            loader:() => fetch('http://localhost:5000/toy')
        },
        {
            path: '/addtoy',
            element: <PrivateRoute><Addtoys></Addtoys> </PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <Updatetoys></Updatetoys>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
            path: '/alltoys',
            element: <Alltoys></Alltoys>
        },
        {
           path : '/alltoys/:id',
           element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
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