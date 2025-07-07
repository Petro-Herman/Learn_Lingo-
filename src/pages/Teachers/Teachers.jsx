import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { fetchTeachers } from "../../services/teachersService";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import css from "./Teachers.module.css";

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
    <div className={css.teachersPage}>
      <h1>Teachers</h1>
      {/* <ul>
        <li>
          <Link to="teach1">Teach1</Link>
        </li>
        <li>
          <Link to="teach2">Teach2</Link>
        </li>
      </ul> */}
      {/* <Outlet /> */}
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}
