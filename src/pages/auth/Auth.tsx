import React from "react";
import { Outlet } from "react-router-dom";
import Image from "../../assets/sinp.png";
import "./auth.css";
const Auth: React.FC = () => {
  return (
    <div className=" bg-[#09090A]">
      <div className="grid lg:grid-cols-2  ms:grid-cols-2 sm:grid-cols-2">
        <Outlet />
        <div className="col-span-1 h-screen wrapper">
          <img
            className="h-[599px] w-full object-cover"
            src={Image}
            alt="Background auth"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
