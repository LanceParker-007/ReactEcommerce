import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext(); //Create Context

//Create Provider
//children always in small
const CartProvider = ({ children }) => {
  const getLocalCartData = () => {
    let localCartData = JSON.parse(localStorage.getItem("reactEcommerceCart"));
    if (localCartData === []) {
      return [];
    } else {
      return localCartData;
    }
  };

  const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
  };

  const [state, dispatch] = useReducer(reducer, initialState); // Reducer, it tells us hw to achieve our action
  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        color,
        amount,
        product,
      },
    });
  };

  //To add data in local storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("reactEcommerceCart", JSON.stringify(state.cart));
  }, [state.cart]);

  //To remove item
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  //To clear cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  // -----
  // Increase Item Count
  const setIncrease = (id) => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: id,
    });
  };

  //Decrease Item Count
  const setDecrease = (id) => {
    dispatch({
      type: "DECREASE_ITEM",
      payload: id,
    });
  };
  // -----

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Custom Global Context Hook to more simply use the useContextApi instead

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
//CartProvider is in index.js which tells us from where it is providing
//CartContext tells us you can use these these things
