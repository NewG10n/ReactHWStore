export const getCartQty = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.reduce((qty, { qty: itemQty }) => qty + itemQty, 0) : null;
};

export const checkCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return !!cart && !!cart.find((item) => item.id === id);
};

export const addToCart = (product) => {
  const { id } = product;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemIndex = cart.findIndex((item) => item.id === id);

  cart[itemIndex]
    ? (cart[itemIndex] = {
        ...cart[itemIndex],
        qty: cart[itemIndex].qty + 1,
      })
    : cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
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
