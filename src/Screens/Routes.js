import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "./Client/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default Router;
