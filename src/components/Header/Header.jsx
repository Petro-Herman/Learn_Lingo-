import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
// import {flag} from "../../img/ukraine.png"
import css from "./Header.module.css";
import { use, useState } from "react";
// import AuthForm from "../AuthForm/AuthForm";
// import Layout from "../../layout/Layout";
import LoginModal from "../AuthForm/auth/LoginModal";
import RegisterModal from "../AuthForm/auth/RegisterModal";


export default function HeaderHome({user}) {
  // const [showModal, setShowModal] = useState(false);
  // const [authType, setAuthType] = useState("login");
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleLogin = (email, password) => {
    console.log("Login", email, password);
    setLoginOpen(false);
  };

  const handleRegister = (email, password, name) => {
    console.log("Register", email, password, name);
    setRegisterOpen(false);
  }

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
          <button className={css.headerBtnLog} onClick={() => setLoginOpen(true)}>
            <FiLogIn
              className={css.headerIcon}
              // style={{ marginRight: "8px" }}
            />
            Log in
          </button>
        </li>
        <li>
          <button className={css.headerBtnReg} onClick={() => setRegisterOpen(true)}>
            Registration</button>
        </li>
      </ul>
      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} onLogin={handleLogin} />}
      {/* <LoginModal onLogin={handleLogin} /> */}
      {isRegisterOpen && <RegisterModal onClose={() => setRegisterOpen(false)} onRegister={handleRegister} />}
      {/* <RegisterModal onRegister={handleRegister}/> */}
      {/* {showModal && <AuthForm type={authType} onClose={() => setShowModal(false)}/>} */}
    </header>
  );
}
