import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import css from "./Header.module.css";
import { useState } from "react";
import LoginModal from "../AuthForm/auth/LoginModal";
import RegisterModal from "../AuthForm/auth/RegisterModal";
import { useAuth } from "../../context/AuthContext.jsx";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



export default function HeaderHome() {
  const { user } = useAuth();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleLogin = async ({ email, password }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setLoginOpen(false);
    } catch (error) {
        console.error(error);
        alert("Login failed. Please check your credentials.");
    }
  };
  
  
  const handleRegister = async ({ name, email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(user, {
      displayName: name,
    });

    console.log("User registered and profile updated");

    setRegisterOpen(false);
  } catch (error) {
    console.error("Registration error:", error.message);
    alert("Registration failed");
  }
};

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <nav>
        <Link className={css.logo} to="/">
          <img src="img/ukraine.png" alt="flag of Ukraine" width="28" height="28" />
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
          {user && (
            <li>
              <NavLink className={css.headerNav} to="/favorites">
                Favorites
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <ul className={css.headerItems}>
        {user ? (
          <>
            <li className={css.greeting}>Welcome, {user.displayName || user.name}</li>
            <li>
              <button className={css.headerBtnLog} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button className={css.headerBtnLog} onClick={() => setLoginOpen(true)}>
                <FiLogIn className={css.headerIcon} />
                Log in
              </button>
            </li>
            <li>
              <button className={css.headerBtnReg} onClick={() => setRegisterOpen(true)}>
                Registration
              </button>
            </li>
          </>
        )}
      </ul>

      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} onLogin={handleLogin}/>}
      {isRegisterOpen && <RegisterModal onClose={() => setRegisterOpen(false)} onRegister={handleRegister} />
}
    </header>
  );
}
