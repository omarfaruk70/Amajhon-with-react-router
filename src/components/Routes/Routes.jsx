import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";

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
            // {
            //     path: '/products/1',
            //     element: <div>single products</div>
            // }
        ]
    }
])

export default Routes;