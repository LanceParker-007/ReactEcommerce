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

  // Thapa Code

  // --------------------------------MyCode--------------------------------
  if (action.type === "INCREASE_ITEM") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "DECREASE_ITEM") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((acc, curElem) => {
  //     let { amount } = curElem;
  //     acc += amount;
  //     return acc;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((acc, curElem) => {
  //     let { price, amount } = curElem;
  //     acc += price * amount;
  //     return acc;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price: total_price, //you can simply write total_price
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accumulator, curElem) => {
        let { price, amount } = curElem;
        accumulator.total_item += amount;
        accumulator.total_price += price * amount;
        return accumulator;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );

    return {
      ...state,
      total_item: total_item,
      total_price: total_price,
    };
  }

  return state; // it must be return
};

export default cartReducer;

// // --------------------------------MyCode--------------------------------
// Use map instead
// if (action.type === "INCREASE_ITEM") {
//   state.cart.forEach((curElem) => {
//     if (curElem.id === action.payload && curElem.amount + 1 < curElem.max) {
//       curElem.amount += 1;
//     }
//   });

//   return {
//     ...state,
//   };
// }
// if (action.type === "DECREASE_ITEM") {
//   state.cart.forEach((curElem) => {
//     if (curElem.id === action.payload && curElem.amount - 1 > 0) {
//       curElem.amount -= 1;
//     }
//   });

//   return {
//     ...state,
//   };
// }
// // ---------------------------------
