const ProductReducer = (state, action) => {

    // Products 

    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === "SET_API_DATA") {
        const featureProducts = action.payload.filter((curElem) => curElem.featured === true);

        return {
            ...state,
            isLoading: false,
            isError: false,
            products: action.payload,
            featureProducts: featureProducts,
        };
    }

    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }

    //Single Products Reducer

    switch (action.type) {
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            }

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            }

        default:
            return state;
    }
};

export default ProductReducer;