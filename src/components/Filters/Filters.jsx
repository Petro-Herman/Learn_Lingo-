import css from "./Filters.module.css";

export default function Filters({
  selectedLanguage,
  setSelectedLanguage,
  selectedLevel,
  setSelectedLevel,
  price,
  setPrice,
}) {
  return (
    <div className={css.filters}>
        <div className={css.selectWrap}>
          <label htmlFor="Language">Languages</label>
      <select style={{width: 221}} className={css.filtersSelect}
      id="Language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {/* <option value="">All Languages</option> */}
        <option value="French">French</option>
        <option value="English">English</option>
        <option value="Spanish">Ukrainian</option>
        <option value="German">German</option>
        <option value="Mandarin Chinese">Polish</option>
      </select>
      </div>

      <div className={css.selectWrap}>
        <label htmlFor="level">Level of knowledge</label>
      <select style={{width: 198}} className={css.filtersSelect}
      id="level"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
      >
        <option value="A1 Beginner">A1 Beginner</option>
        <option value="A2 Elementary">A2 Elementary</option>
        <option value="B1 Intermediate">B1 Intermediate</option>
        <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
        <option value="C1 Advanced">C1 Advanced</option>
        <option value="C2 Proficient">C2 Proficient</option>
      </select>
      </div>

      <div className={css.selectWrap}>
        <label htmlFor="price">Price</label>
              <select style={{width: 124}} className={css.filtersSelect} id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="30">30</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
        </select>
        </div>
    </div>
  );
}
