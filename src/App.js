import React from 'react';
import Main from './pages/Main'
import {RouterProvider} from "react-router-dom";
import router from "./router"
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Header />
          <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;