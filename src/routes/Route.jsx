import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/Menu";
import Chefsection from "../components/Chefsection";
import Contact from "../pages/contact/Contact";
import Blogsec from "../pages/Blogsec";
import Protectedroute from "../layout/Protectedroute";
import DynamicLoading from "../components/DynamicLoading";
// import Wishlist from "../pages/Wishlist";
// import Cart from "../pages/Cart";
const Cart = lazy(()=> import("../Pages/Cart"))
const Wishlist = lazy (()=> import("../pages/Wishlist"))

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
      {
        path: "cart",
        // element: <Cart />,
        element: (
          <Suspense fallback={<DynamicLoading />}>
            <Cart />
          </Suspense>
        ),
        
      },
      {
        path: "wishlist",
        
        element: (
          <Suspense fallback={<DynamicLoading />}>
            <Wishlist />
          </Suspense>
        ),
        
      },
      {
        path: "/cart",
        element: <Protectedroute />,
        children: [
          {
            path: "",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);
export default Route;
