const initState = {
  search: "",
  status: "all",
  priority: [],
};

const filterReducer = (state = initState, action) => {
  // console.log({ state, action });
  // tach ra lam live reducer
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
