import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../LayOut/Main";
import About from "../Pages/About";


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },


])