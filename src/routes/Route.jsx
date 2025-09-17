import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/Menu";
import Chefsection from "../components/Chefsection";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";


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
        element : <Menu/>
      },
      {
        path: "chef",
        element: <Chefsection/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ],
  },
]);
export default Route;
