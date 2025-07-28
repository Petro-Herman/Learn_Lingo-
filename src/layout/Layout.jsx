import { NavLink, Outlet } from "react-router-dom";
import HeaderHome from "../components/Header/Header";

export default function Layout(user) {
  return (
    <>
      <Outlet />
    </>
  );
}
