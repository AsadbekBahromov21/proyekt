import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex gap-7 mt-4">
      <h2>Header</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/singUp"}>SingUp</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </div>
  );
};

export default Header;
