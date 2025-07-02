import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Teachers from "../../pages/Teachers/Teachers";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Teach1 from "../../pages/Teachers/Teach1";
import Teach2 from "../../pages/Teachers/Teach2";

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />}>
          <Route path="teach1" element={<Teach1 />} />
          <Route path="teach2" element={<Teach2 />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
