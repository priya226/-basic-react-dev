import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestarauntMenu"
import Home from './components/Home';
import SignUpForm from "./components/signUp";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import Practice from "./components/Practice";
import ValidateAuth from "../utils/validateAuth";
import Popular from "./components/Popular";

const appRouter = createBrowserRouter([
    {
        path: "/", // show path for routing
        element: <Home />, // show home for particular path
        errorElement: <Error />, // show error component for path is different
        children: [
          // show children component for routing
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/about",
            element: <About />,
            children:[
              {
                path:'profile',
                element: <ValidateAuth><Profile/> </ValidateAuth>
              }
            ]
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
          },
          {
            path: "/restaurant/popular", // Here user/admin is matched bcs  router try to match router with dynamic routing
            element: <Popular />,
          }
        ],
      },
      {
        path: "/signUp",
        element: <SignUpForm />
      },
      {
        path: "/login",
        element: <LoginForm />
      },  
      {
        path: '/Practice',
        element:<Practice />
      }
])

export default appRouter;