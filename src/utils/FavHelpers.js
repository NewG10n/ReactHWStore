export const getFavQty = () => {
  const fav = JSON.parse(localStorage.getItem("fav"));

  return fav ? Object.keys(fav).length : null;
};

export const checkFav = (id) => !!JSON.parse(localStorage.getItem("fav"))?.[id];

export const toggleFav = (id) => {
  const fav = JSON.parse(localStorage.getItem("fav")) || {};

  fav[id] ? delete fav[id] : (fav[id] = true);

  Object.keys(fav).length
    ? localStorage.setItem("fav", JSON.stringify(fav))
    : localStorage.removeItem("fav");
};
