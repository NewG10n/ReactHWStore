export const checkCart = (id) =>
  !!JSON.parse(localStorage.getItem("cart"))?.[id];

export const addToCart = (id) => {
  let cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  if (id in cart) {
    cart[id].qty++;
  } else {
    cart[id] = {
      qty: 1,
    };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  delete cart[id];

  Object.keys(cart).length
    ? localStorage.setItem("cart", JSON.stringify(cart))
    : localStorage.removeItem("cart");
};
