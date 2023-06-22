const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    console.log("Add to cart Reducer", product.image[0]);
    let cartProduct;

    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0],
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state; // it must be return
};

export default cartReducer;
