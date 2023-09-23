import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import DetailsCart from "../DetailsCart/DetailsCart";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Gallery></Gallery>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
           {
            path: '/detailsCart/:id',
            element: <DetailsCart></DetailsCart>,
            loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
           }
        ]
    }
])

export default Routes;