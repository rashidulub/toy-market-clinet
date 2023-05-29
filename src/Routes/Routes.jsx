import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/Details/Details";
import AddToy from "../Pages/AddToy/AddToy";
import Mytoy from "../Pages/Mytoy/Mytoy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>

        },
        {
          path:'signup',
          element:<SignUp></SignUp>

        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=> fetch(`https://toy-market-place-server-xi.vercel.app/services/${params.id}`)


          
        },
        {
          path:'addtoy',
          element:<AddToy></AddToy>
        },
        {
          path:'mytoy',
          element:<Mytoy></Mytoy>,
          loader:()=> fetch('https://toy-market-place-server-xi.vercel.app/addtoy')
        },
        {
          path:'updatetoy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://toy-market-place-server-xi.vercel.app/addtoy/${params.id}`)
          

        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
        
        

      ]
    },
  ]);



export default router;