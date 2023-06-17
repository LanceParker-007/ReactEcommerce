// Create a Context (Context API)
// Provider
// Consumer => useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}, // is an object 
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({
        type: "SET_API_DATA", payload: products
      })
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  // my 2nd api call to get single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      // console.log(singleProduct);
      
      dispatch({
        type: "SET_SINGLE_PRODUCT", payload: singleProduct
      });

    } catch (error) {
      dispatch({ type: "Set_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    getProducts(API);
    // console.log("Context", state.products);
  }, [])

  return (
    <AppContext.Provider value={{
      ...state, getSingleProduct
    }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };