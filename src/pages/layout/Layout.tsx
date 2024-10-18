import { Outlet } from "react-router-dom";
import Snper from "../../components/snper/Snper";

const Layout = () => {
  return (
    <>
      <Snper />
      <main className="ml-[270px] mr-[550px] w-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
