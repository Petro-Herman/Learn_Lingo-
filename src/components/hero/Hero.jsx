import { useNavigate } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero() {
const navigate = useNavigate();

  return (
    <div className={css.hero}>
      <div className={css.heroWrap}>
        <h1 className={css.heroTitle}>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p className={css.heroText}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button type="button" className={css.heroBtn} onClick={() => navigate("/teachers")}>Get started</button>
      </div>
      <div className={css.heroImg}>
        <img src="img/hero_img.jpg" alt="girl with macbook" />
      </div>
    </div>
  );
}
