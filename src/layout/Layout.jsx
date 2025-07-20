import { NavLink, Outlet } from "react-router-dom";
import HeaderHome from "../components/Header/Header";

export default function Layout(user) {
  return (
    <>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav> */}
      {/* <HeaderHome user={user}/> */}
      <Outlet />
    </>
  );
}
