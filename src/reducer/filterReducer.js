const filterReducer = (state, action) =>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],//instead of using original data we are using copy of data
                all_products: [...action.payload],
            }
        
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view: true,
            }
            
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view: false,
            }

        default: return state;
    }
}

export default filterReducer;