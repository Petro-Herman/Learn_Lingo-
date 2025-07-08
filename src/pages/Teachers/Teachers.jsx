import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { fetchTeachers } from "../../services/teachersService";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import css from "./Teachers.module.css";
import HeaderHome from "../../components/Header/Header";
import { Hourglass } from "react-loader-spinner";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to load teachers:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

const visibleTeachers = teachers.slice(0, visibleCount);

  // const totalPages = Math.ceil(teachers.length / itemsPerPage);
  // const indexOfLast = currentPage * itemsPerPage;
  // const indexOfFirst = indexOfLast - itemsPerPage;
  // const currentTeachers = teachers.slice(indexOfFirst, indexOfLast);

  //   useEffect(() => {
  //     getTeachers().then(setTeachers);
  //   }, []);
  // useEffect(() => {
  //   const load = async () => {
  //     const data = await fetchTeachers();
  //     setTeachers(data);
  //   };
  //   load();
  // }, []);

  return (
    <>
      <HeaderHome />
      <div className={css.teachersPage}>
        <h1>Teachers</h1>
{loading ? (
  <div className={css.loaderWrapper}>
        <Hourglass 
        visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
  </div>
) : (
  <>
  <ul className={css.teachersList}>
        {visibleTeachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
        </ul>

        {visibleCount < teachers.length && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load More</button>
        )}
  </>
)}
        {/* <ul>
        <li>
          <Link to="teach1">Teach1</Link>
        </li>
        <li>
          <Link to="teach2">Teach2</Link>
        </li>
      </ul> */}
        {/* <Outlet /> */}
        
      

      {/* <div className={css.pagination}>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i +1)} className={currentPage === i + 1 ? css.active : ""}>{i +1}</button>
        ))}
      </div> */}
      </div>
    </>
  );
}
