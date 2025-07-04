import { Link, NavLink } from "react-router-dom";
// import {flag} from "../../img/ukraine.png"
import css from "./Header.module.css"
// import Layout from "../../layout/Layout";

export default function HeaderHome() {
    return(
        <header>
            <nav>
                <Link className={css.logo} to="/"><img src="img/ukraine.png" alt="flag of Ukraine"/>LearnLingo</Link>
                <ul className={css.headerNavItem}>
                    <li><NavLink className={css.headerNav} to="/">Home</NavLink></li>
                    <li><NavLink className={css.headerNav} to="/teachers">Teachers</NavLink></li>
                    <li><NavLink className={css.headerNav} to="/favorites">Favorites</NavLink></li>
                </ul>
            </nav>
            <ul className={css.headerItem}>
                <li><button className={css.headerBtn}>Log in</button></li>
                <li><button className={css.headerBtn}>Registration</button></li>
            </ul>
        </header>
    );
}