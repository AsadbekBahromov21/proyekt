import { Outlet } from "react-router-dom";
import Snper from "../../components/snper/Snper";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <Snper />

      <main className="pl-[270px] desc  min-w-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
