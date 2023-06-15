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
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async(url)=>{
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            // console.log(products);
            dispatch({
                type:"SET_API_DATA", payload: products
            })
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }
    
    useEffect(() => {
      getProducts(API);
    }, [])
    

  return (
    <AppContext.Provider value={{
        ...state
    }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = ()=>{
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };