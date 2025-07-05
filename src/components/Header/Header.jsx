import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
// import {flag} from "../../img/ukraine.png"
import css from "./Header.module.css";
// import Layout from "../../layout/Layout";

export default function HeaderHome() {
  return (
    <header>
      <nav>
        <Link className={css.logo} to="/">
          <img
            src="img/ukraine.png"
            alt="flag of Ukraine"
            width="28"
            height="28"
          />
          LearnLingo
        </Link>
        <ul className={css.headerNavItems}>
          <li>
            <NavLink className={css.headerNav} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.headerNav} to="/teachers">
              Teachers
            </NavLink>
          </li>
          {/* <li><NavLink className={css.headerNav} to="/favorites">Favorites</NavLink></li> */}
        </ul>
      </nav>
      <ul className={css.headerItems}>
        <li>
          <button className={css.headerBtnLog}>
            <FiLogIn
              className={css.headerIcon}
              style={{ marginRight: "8px" }}
            />
            Log in
          </button>
        </li>
        <li>
          <button className={css.headerBtnReg}>Registration</button>
        </li>
      </ul>
    </header>
  );
}
