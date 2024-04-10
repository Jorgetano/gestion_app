import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panel from "./layouts/components/admin/Panel.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // aqui se define lo que debe salir primero al momento de que se cargue la pagina 
  },
  {
    path: "/PaNeL",
    element: <Panel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
