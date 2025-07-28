import { FaStar  } from "react-icons/fa";
import css from "./TeacherCard.module.css";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getFavorites, addFavorite, removeFavorite, isFavorite } from "../../utils/favorites";

export default function TeacherCard({ teacher }) {
  const {
    id,
    name,
    surname,
    avatar_url,
    languages,
    levels,
    rating,
    reviews = [],
    lessons_done,
    price_per_hour,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const { isLoggedIn } = useAuth();

  const [favorite, setFavorite] = useState(isFavorite(id));

  useEffect(() => {
  if (isLoggedIn) {
    setFavorite(isFavorite(id));
  }
}, [isLoggedIn, id]);

  
  const handleFavoriteClick = () => {
  if (!isLoggedIn) {
    return alert("Please log in to add to favorites.");
    }
    
     console.log("User:", JSON.parse(localStorage.getItem("user")));
  console.log("Before:", getFavorites());

  if (favorite) {
    removeFavorite(id);
  } else {
    addFavorite(id);
  }

  setFavorite(!favorite);
  window.dispatchEvent(new Event("favorites-updated"));
};



  const [isExpanded, setIsExbanded] = useState(false);

  const toggleCard = () => {
    setIsExbanded((prev) => !prev);
  };
    

  return (
    <li className={css.card}>
      <img className={css.avatar} src={avatar_url} alt={`${name} ${surname}`} />
      {/* <div> */}
      <div className={css.content}>
        <div className={css.header}>
          <div className={css.cardWrap}>
            <div>
            <p className={css.label}>Languages</p>
            <h2 className={css.name}>
            {name} {surname}
          </h2>
          </div>
          <div className={css.meta}>
            <span className={css.itemIcon}>
                  <FiBookOpen className={css.bookOpen} />
              <p className={css.itemText}>Lessons online</p>
            </span>
              <span>
                <p className={css.itemText}>Lessons done: {lessons_done}</p>
              </span>
            <span className={css.itemIcon}>
              {/* {" "} */}
                  <FaStar  className={css.iconStar} /> <p className={css.itemText}>Rating: {rating}</p>
            </span>
            <span>
              <p className={css.itemText}>Price/1 hour: <span className={css.price}>${price_per_hour}</span></p>
            </span>
              <button className={css.heartBtn} onClick={handleFavoriteClick}>
                {favorite ? (
                  <AiFillHeart className={css.heartActive} />
                ) : (
                  <AiOutlineHeart className={css.heart} />
                )}
              </button>
              <button onClick={() => console.log("Simple button clicked")}>
  Test button
</button>

          </div>
        </div>
          
        </div>
        <ul className={css.cardList}>
          <li>
            <p className={css.label}>
            Speaks: {""}
            {languages.map((lang, i) => (
              <span key={i} className={css.lang}>
                {lang}
                {i < languages.length - 1 && ","}&nbsp;
              </span>
            ))}
            </p>
          </li>
          <li>
            <p className={css.cardText}>
          <span className={css.label}>Lesson Info:</span> {lesson_info}
            </p>
          </li>
          <li>
            <p className={css.cardText}>
          <span className={css.label}>Conditions</span> {conditions.join("")}
            </p>
          </li>
        </ul>

        <button className={css.readMore} onClick={toggleCard}>
          {isExpanded ? "Hide" : "Read More"}
        </button>

        {isExpanded && (
          <>
            <ul className={css.cardListHide}>
            <li>
              <p> {experience}</p>
            </li>
          </ul>
            {reviews && reviews.length > 0 && (
              <ul className={css.review}>
              {reviews.map((review, i) => (
              <li key={i}>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <p><FaStar className={css.iconStar} /> {review.reviewer_rating}</p>
                  <p className={css.reviewComment}>{review.comment}</p>
              </li>
              ))}
            </ul>
            )}
          </>
        )}

        <ul className={css.levels}>
          {levels.map((level, i) => (
            <li
              key={i}
              className={`${css.level} ${i === 0 ? css.highlight : ""}`}
            >
              #{level}
            </li>
          ))}
        </ul>
        {isExpanded && (
          <button className={css.teacherMoreBtn}>Book trial lesson</button>
        )}
        </div>
    </li>
  );
}
