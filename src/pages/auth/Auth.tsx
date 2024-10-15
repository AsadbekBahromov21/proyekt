import React from "react";
import { Outlet } from "react-router-dom";
import Image from "../../assets/sinp.png";

const Auth: React.FC = () => {
  return (
    <div className=" bg-[#09090A]">
      <div className="grid grid-cols-2">
        <Outlet />
        <div className="col-span-1 h-screen">
          <img
            className="h-[800px] w-full object-cover"
            src={Image}
            alt="Background auth"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
