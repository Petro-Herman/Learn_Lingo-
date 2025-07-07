import { CiStar } from "react-icons/ci";
import css from "./TeacherCard.module.css";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function TeacherCard({ teacher }) {
  const {
    name,
    surname,
    avatar_url,
    languages,
    levels,
    rating,
    lessons_done,
    price_per_hour,
    lesson_info,
    conditions,
  } = teacher;

  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar_url} alt={`${name} ${surname}`} />

      <div className={css.content}>
        <div className={css.header}>
          <p className={css.label}>Languages</p>
          <div className={css.meta}>
            <span>
              <FiBookOpen />
              Lessons online
            </span>
            <span> Lessons done: {lessons_done}</span>
            <span>
              {" "}
              <CiStar /> Rating: {rating}
            </span>
            <span>
              Price/1 hour: <span className={css.price}>${price_per_hour}</span>
            </span>
            <AiOutlineHeart />
          </div>
          <h2 className={css.name}>
            {name} {surname}
          </h2>
          <p className={css.speaks}>
            Speaks: {""}
            {languages.map((lang, i) => (
              <span key={i} className={css.lang}>
                {lang}
                {i < languages.length - 1 && ","}&nbsp;
              </span>
            ))}
          </p>
        </div>

        <p>
          <strong>Lesson Info:</strong> {lesson_info}
        </p>
        <p>
          <strong>Conditions</strong> {conditions.join("")}
        </p>

        <button className={css.readMore}>Read More</button>

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
      </div>
    </div>
  );
}
