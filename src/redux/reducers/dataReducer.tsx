const reducer = (state = [], action: any) => {
  switch (action.type) {
    case "setAppData":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
