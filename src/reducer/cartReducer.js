const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    console.log("Add to cart Reducer", product);
  }

  return state; // it must be return
};

export default cartReducer;
