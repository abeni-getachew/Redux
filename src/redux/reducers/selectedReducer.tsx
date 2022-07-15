import { Timeframes } from "../../types";

const reducer = (state = Timeframes.Daily, action: any) => {
  switch (action.type) {
    case "setTimeFrame":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
