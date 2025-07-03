import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getTeachers } from "../../services/firebase";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers().then(setTeachers);
  }, []);

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
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          {teacher.name}
          {teacher.surname}
        </div>
      ))}
    </>
  );
}
