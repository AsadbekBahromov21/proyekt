import { Outlet } from "react-router-dom";
import Snper from "../../components/snper/Snper";

const Layout = () => {
  return (
    <>
      <Snper />
      <main className="ml-[270px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
