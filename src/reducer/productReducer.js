const ProductReducer = (state, action) =>{
    if(action.type === "SET_LOADING"){
        return{
            ...state,
            isLoading: true,
        };
    }

    if(action.type === "SET_API_DATA"){
        const featureData = action.payload.filter((curElem)=>curElem.featured === true);

        return{
            ...state,
            isLoading: false,
            isError: false,
            products: action.payload,
            featureProducts: featureData,
        };
    }

    if(action.type === "API_ERROR"){
        return{
            ...state,
            isLoading: false,
            isError: true,
        };
    }
};

export default ProductReducer;