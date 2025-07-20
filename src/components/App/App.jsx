import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Teachers from "../../pages/Teachers/Teachers";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
// import Teach1 from "../../pages/Teachers/Teach1";
// import Teach2 from "../../pages/Teachers/Teach2";
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
            {/* <Route path="teach1" element={<Teach1 />} />
            <Route path="teach2" element={<Teach2 />} /> */}
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
