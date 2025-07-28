export const getFavorites = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return [];
  const favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`));
  return Array.isArray(favorites) ? favorites : [];
};

export const isFavorite = (teacherId) => {
  return getFavorites().includes(teacherId);
};

export const addFavorite = (teacherId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;
  const favorites = getFavorites();
  if (!favorites.includes(teacherId)) {
    const updatedFavorites = [...favorites, teacherId];
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites));
  }
};

export const removeFavorite = (teacherId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;
  const updatedFavorites = getFavorites().filter((id) => id !== teacherId);
  localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites));
};
