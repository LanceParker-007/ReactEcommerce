const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload], //instead of using original data we are using copy of data
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      //1st way
      //   let userSortValue = document.getElementById("sort");
      //   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload, //2nd way using event.target.value
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      //   let tempSortProduct = [...action.payload];
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") return a.price - b.price;
        if (sorting_value === "highest") return b.price - a.price;
        if (sorting_value === "a-z") return a.name.localeCompare(b.name);
        if (sorting_value === "z-a") return b.name.localeCompare(a.name);
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value, //name kya hai text for search, 123456789, [5]=11, 1234116789
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color } = state.filters;

      if (text.length) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
        // console.log(tempFilterProduct);
      }

      if (category) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category || category === "All";
        });
        // console.log(tempFilterProduct);
      }

      if (company) {
        console.log(company, "Filter");
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company === company.toLowerCase() || company === "All";
        });
        // console.log(tempFilterProduct);
      }

      if (color) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          //   return curElem.colors.some((elem) => elem === color) || color === "All";
          return curElem.colors.includes(color) || color === "All";
        });
        console.log(tempFilterProduct);
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
