import React from "react";

import { useSelector } from "react-redux";

import GoodsList from "../../components/goodsList";

const Favorites = () => {
  const favoritesList = useSelector((state) => state.goods).filter(
    (item) => item.isFavorite
  );

  return favoritesList.length ? (
    <GoodsList list={favoritesList} />
  ) : (
    <h3>Your Favorites list is empty</h3>
  );
};

export default Favorites;
