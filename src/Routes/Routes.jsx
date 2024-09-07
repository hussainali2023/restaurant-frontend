import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div> Error!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
