import React from "react"
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Job from "./pages/Job";
import JobDetail from "./pages/JobDetail";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path:"/product/:productId",
        element:<ProductDetail/>
    },
    {
        path:"/job/:jobId",
        element: <JobDetail/>
    },

    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/job",
        element: <Job/>
    }
])

export default router