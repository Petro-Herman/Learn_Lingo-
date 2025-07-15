const filteredTeachers = teachers.filter ((teacher) => {
    const matchesLanguage = selectedLanguage ? teacher.languages.includes(selectedLanguage) : true
;

const matchesLevel = selectedLevel ? teacher.levels.includes(selectedLevel) : true;

const matchesPrice = price ? teacher.price_per_hour <= Number(price) : true;

return matchesLanguage && matchesLevel && matchesPrice;
});

export default filteredTeachers;