import { Link, Outlet } from "react-router-dom";

export default function Teachers() {
  return (
    <>
      <h1>Teachers</h1>
      <ul>
        <li>
          <Link to="teach1">Teach1</Link>
        </li>
        <li>
          <Link to="teach2">Teach2</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
