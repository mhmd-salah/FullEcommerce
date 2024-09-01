import {  NavLink } from "react-router-dom";
import MyMenu from "./MyMenu";

function Header() {

  return (
    <header className="bg-[#deee] py-5 text-lg shadow-sm">
      <div className="container  flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-teal-600">Souq</h1>
        <ul className="flex space-x-3 *:text-lg items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
          <MyMenu />
        </ul>
      </div>
    </header>
  );
}

export default Header