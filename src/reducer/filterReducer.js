const filterReducer = (state, action) =>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],//instead of using original data we are using copy of data
                all_products: [...action.payload],
            }
        
            case "SET_GRIDVIEW":
                return{
                    ...state,
                    grid_view: true,
                }

        default: return state;
    }
}

export default filterReducer;