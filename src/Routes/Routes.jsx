import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/Details/Details";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element:<Details></Details>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)


          
        },
        {
          path:'addtoy',
          element:<AddToy></AddToy>
        },
        {
          path:'mytoy',
          element:
        }
        

      ]
    },
  ]);



export default router;