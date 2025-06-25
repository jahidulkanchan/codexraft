import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <>
      <div>
        <ScrollRestoration/>
        <Navbar />
        <Outlet />
        <Toaster />
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
