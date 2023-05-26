import React from "react"
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path:"/product/:id",
        element:<Detail/>
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/login",
        element: <Login/>
    },
])

export default router