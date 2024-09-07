import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@smastrom/react-rating/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className=" max-w-9xl mx-auto font-inter ">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
