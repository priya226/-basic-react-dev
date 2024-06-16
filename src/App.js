import React from "react";
import  ReactDOM  from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App-router";
import AuthProvider from "../utils/Auth";

const AppLayoutComponent = ()=>{
  //  Wrap the RouterProvider component with the AuthProvider 
  //  in your main entry point file, typically index.js or App.js.
  // Now, all components rendered through the router
  //  will have access to the AuthProvider context.

    return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
    )
   }
export default AppLayoutComponent;
//   root.render(<AppLayoutComponent />) // prev we were loading only applayout comp
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<AppLayoutComponent/>); // render RouterProvider and use router as props and pass value appRouter
/**
 * introducing react-routing
 * To begin using createBrowserRouter in your React application, you must first install the react-router-dom package.
 * Once installed, you can create a router object and pass it to the RouterProvider component to enable routing in your app.
 * We then render the RouterProvider component at the root of our React app, passing the router object as a prop.
 *  
 */