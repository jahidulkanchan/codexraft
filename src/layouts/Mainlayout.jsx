import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Mainlayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Toaster />
      </div>
    </>
  );
};

export default Mainlayout;
