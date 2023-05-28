export const getCartQty = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.reduce((qty, { qty: itemQty }) => qty + itemQty, 0) : null;
};

export const checkCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return !!cart && !!cart.find((item) => item.id === id);
};

export const addCartQty = (state, id) => {
  return state.map((item) =>
    item.id === id ? { ...item, cartQty: (item.cartQty || 0) + 1 } : item
  );
};

export const removeFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    const updatedCart = cart.filter((item) => item.id !== id);
    if (updatedCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.removeItem("cart");
    }
  }
};
