import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/Menu";
import Chefsection from "../components/Chefsection";
import Contact from "../pages/contact/Contact";
import Blogsec from "../pages/Blogsec";
import Protectedroute from "../layout/Protectedroute";
import Cart from "../pages/Cart";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "chef",
        element: <Chefsection />,
      },
      {
        path: "blog",
        element: <Blogsec />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "cart",
      //   element: <Cart/>
      // },
      {
        path: "/login",
        element: <Protectedroute />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);
export default Route;
