import css from "./Hero.module.css"

export default function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.heroTitle}>
                <h1>Unlock your potential with the best  <span>language</span> tutors</h1>
                <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                <button>Get started</button>
            </div>
            <div className={css.heroWrap}></div>
        </div>
    )
}