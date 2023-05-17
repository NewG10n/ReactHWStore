export const checkCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return !!cart[id];
};

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
