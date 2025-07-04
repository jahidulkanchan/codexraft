import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import errorPage from '../assets/404-Page.png'
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
    ],
    errorElement: (
      <p className="flex min-h-screen justify-center items-center">
        <img className="w-[80%]" src={errorPage} alt="ErrorPng" />
      </p>
    ),
  },
]);