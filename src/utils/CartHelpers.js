export const getCartQty = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart
    ? Object.values(cart).reduce((qty, { qty: itemQty }) => qty + itemQty, 0)
    : null;
};

export const checkCart = (id) =>
  !!JSON.parse(localStorage.getItem("cart"))?.[id];

export const addToCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  cart[id] = { qty: (cart[id]?.qty || 0) + 1 };
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    delete cart[id];
    Object.keys(cart).length > 0
      ? localStorage.setItem("cart", JSON.stringify(cart))
      : localStorage.removeItem("cart");
  }
};
