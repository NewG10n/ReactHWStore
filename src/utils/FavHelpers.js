export const getFavQty = () => {
  const fav = JSON.parse(localStorage.getItem("fav"));

  return fav ? Object.keys(fav).length : null;
};
