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
  let cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  cart[id].qty--;

  if (cart[id].qty === 0) {
    delete cart[id];
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return !!cart?.[id]?.qty;
};
