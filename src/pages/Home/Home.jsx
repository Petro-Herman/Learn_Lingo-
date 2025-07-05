import About from "../../components/About/About";
import HeaderHome from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import css from "./Home.module.css"

export default function Home() {
  return (
    <div className={css.container}>
      <HeaderHome />
      <Hero />
      <About />
    </div>
  );
}
