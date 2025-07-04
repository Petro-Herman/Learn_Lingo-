import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { fetchTeachers } from "../../services/teachersService";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  //   useEffect(() => {
  //     getTeachers().then(setTeachers);
  //   }, []);
  useEffect(() => {
    const load = async () => {
      const data = await fetchTeachers();
      setTeachers(data);
    };
    load();
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
          <h3>{teacher.name}</h3>
          <h3>{teacher.surname}</h3>
          <p>Languages: {teacher.languages.join(", ")}</p>
        </div>
      ))}
    </>
  );
}
