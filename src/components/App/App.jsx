import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Teachers from "../../pages/Teachers/Teachers";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Layout from "../../layout/Layout";
import css from './App.module.css'
import { useAuthUser } from "../../hooks/useAuthUser";

export default function App() {
  const user = useAuthUser();

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />}>
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
