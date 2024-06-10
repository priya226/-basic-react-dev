import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestarauntMenu"
import Home from './components/Home';
import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

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
                element:<Profile/>,
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
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },  
])

export default appRouter;