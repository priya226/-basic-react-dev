import React from "react";
import Header from "./Header";
import Footer from './Footer';
import { Outlet } from "react-router-dom";
const Home = ()=>{
    return (
        <div className='app'>
        <Header />
        {/* The Outlet component in react-router-dom is used to render child routes in nested routing scenarios. It acts as a placeholder for where the nested route components should be rendered within their parent route component. This is particularly useful when you have a layout or structure that is shared across multiple nested routes.

        When defining routes, you might have a parent route that has several child routes. The Outlet component is placed in the parent route's component to indicate where the child routes should be rendered. */}

        <Outlet />
        <Footer />
        </div>
    )
   }
export default Home;