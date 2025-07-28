import { useEffect, useState } from "react";
import { fetchTeachers } from "../../services/teachersService";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import HeaderHome from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import css from "./Teachers.module.css";
import { Hourglass } from "react-loader-spinner";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [price, setPrice] = useState("");

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

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLanguage = selectedLanguage
      ? teacher.languages.includes(selectedLanguage)
      : true;

    const matchesLevel = selectedLevel
      ? teacher.levels.includes(selectedLevel)
      : true;

    const matchesPrice = price
      ? teacher.price_per_hour <= Number(price)
      : true;

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <div>
      <HeaderHome />
      <div className={css.teachersPage}>
        <Filters
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          price={price}
          setPrice={setPrice}
        />

        {loading ? (
          <div className={css.loaderWrapper}>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        ) : (
          <>
            <ul className={css.teachersList}>
              {visibleTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </ul>

            {visibleCount < filteredTeachers.length && (
              <button
                className={css.loadMoreBtn}
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
