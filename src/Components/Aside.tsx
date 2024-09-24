import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className=" border-r border-[#ddd] min-w-52  min-h-[calc(100vh-64px)] ">
      <div className="flex flex-col *:p-2 *:text-lg *:pl-4 *:transition mt-4">
        <NavLink
          to={"/products"}
          end
          className={"hover:bg-[#fafafe] hover:text-teal-500 hover:shadow-sm"}
        >
          products
        </NavLink>
        <NavLink
          to={"categories"}
          className={"hover:bg-[#fafafe] hover:text-teal-500 "}
        >
          categories
        </NavLink>
      </div>
    </aside>
  );
}

export default Aside;
