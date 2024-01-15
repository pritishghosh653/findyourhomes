// import React from 'react'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/Home';
import About from './view/About';
import Findyourhomes from "./view/Findyourhomes";
import Contact from './view/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "findyourhomes",
    element: <Findyourhomes />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const Main = () => {
  return (
  <RouterProvider router={router} />
  )
}

export default Main
