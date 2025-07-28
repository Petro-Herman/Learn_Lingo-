import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "../../components/Header/Header";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Loader from "../../components/Loader/Loader";
import { getFavorites } from "../../utils/favorites";
import {
  selectAllTeachers,
  selectIsLoading,
} from "../../redux/selectors/teachersSelectors";
import { fetchTeachers } from "../../redux/teachersSlice";

export default function Favorites() {
  const dispatch = useDispatch();
  const allTeachers = useSelector(selectAllTeachers);
  const isLoading = useSelector(selectIsLoading);
  const [favoriteIds, setFavoriteIds] = useState(getFavorites());

  useEffect(() => {
  const handleUpdate = () => {
    console.log("📣 Отримано подію 'favorites-updated'");
    setFavoriteIds(getFavorites());
  };

  window.addEventListener("favorites-updated", handleUpdate);

  return () => {
    window.removeEventListener("favorites-updated", handleUpdate);
  };
}, []);


  useEffect(() => {
    if (allTeachers.length === 0) {
      dispatch(fetchTeachers());
    }
  }, [dispatch, allTeachers.length]);

  const favoriteTeachers = allTeachers.filter((t) =>
  favoriteIds.includes(String(t.id)) 
);

  useEffect(() => {
  console.log("🔄 favoriteIds оновились:", favoriteIds);
  }, [favoriteIds]);
  
  useEffect(() => {
    if (allTeachers.length === 0) {
      dispatch(fetchTeachers());
    }
  }, [dispatch, allTeachers.length]);

  console.log("🧠 allTeachers:", allTeachers.map(t => t.id));
console.log("⭐ favoriteIds:", favoriteIds);
console.log("✅ favoriteTeachers:", favoriteTeachers.map(t => t.id));


  return (
    <>
      <HeaderHome />
      {isLoading ? (
        <Loader />
      ) : favoriteTeachers.length === 0 ? (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Ви ще не додали жодного викладача до обраного.
        </p>
      ) : (
        <ul>
          {favoriteTeachers.map((teacher) => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
