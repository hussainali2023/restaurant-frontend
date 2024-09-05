import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";

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
    ],
  },
]);

export default router;
