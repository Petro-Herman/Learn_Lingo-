import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav> */}
      <Outlet />
    </>
  );
}
