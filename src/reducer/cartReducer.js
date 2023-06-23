const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    //Tackle the existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) newAmount = curElem.max;
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
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

  //To cleare cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // --------------------------------
  if (action.type === "INCREASE_ITEM") {
    state.cart.forEach((curElem) => {
      if (curElem.id === action.payload && curElem.amount + 1 < curElem.max) {
        curElem.amount += 1;
      }
    });

    return {
      ...state,
    };
  }
  if (action.type === "DECREASE_ITEM") {
    state.cart.forEach((curElem) => {
      if (curElem.id === action.payload && curElem.amount - 1 > 0) {
        curElem.amount -= 1;
      }
    });

    return {
      ...state,
    };
  }
  // --------------------------------

  return state; // it must be return
};

export default cartReducer;
