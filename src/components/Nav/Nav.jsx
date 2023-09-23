import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <nav className="flex justify-between mx-5 items-center shadow-lg py-5">
        <div>
          <h2 className="text-3xl font-bold text-yellow-600">Amajhon</h2>
        </div>
        <ul className="flex gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </ul>
    </nav>
        </div>
    );
};

export default Nav;