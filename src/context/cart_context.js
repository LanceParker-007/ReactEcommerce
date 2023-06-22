import { useContext, useReducer, createContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext(); //Create Context

//Create Provider
//children always in small
const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
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
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
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
