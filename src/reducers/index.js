let initialState = {
  pageID: "",
  title: "",
  para: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        pageID: action.payload.pageID,
        title: action.payload.title,
        para: action.payload.para,
      };

    default:
      return state;
  }
};
export default Reducer;
