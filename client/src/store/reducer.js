const reducer = (state, action) => {
  switch (action.type) {
    case "LOGOUT":
      state = { ...state, logout: action.payload };
      return state;

    default:
      return state;
  }
};
export default reducer;
