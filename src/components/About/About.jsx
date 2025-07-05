import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.aboutWrap}>
      <ul className={css.aboutList}>
        <li className={css.aboutItem}>
          <h3 className={css.aboutItemTitle}>32,000 +</h3>
          <p className={css.aboutItemText}>Experienced tutors</p>
        </li>
        <li className={css.aboutItem}>
          <h3 className={css.aboutItemTitle}>300,000 +</h3>
          <p className={css.aboutItemText}>5-star tutor reviews</p>
        </li>
        <li className={css.aboutItem}>
          <h3 className={css.aboutItemTitle}>120 +</h3>
          <p className={css.aboutItemText}>Subjects taught</p>
        </li>
        <li className={css.aboutItem}>
          <h3 className={css.aboutItemTitle}>200 +</h3>
          <p className={css.aboutItemText}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
