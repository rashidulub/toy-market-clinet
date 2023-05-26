import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Pages/Home/Home/Home";
import CategoryCard from "../Pages/Home/CategoryCard/CategoryCard";

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
          path:'/category/:id',
          element:<CategoryCard></CategoryCard>
        }

      ]
    },
  ]);



export default router;