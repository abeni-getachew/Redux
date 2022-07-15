import { Timeframes } from "../../types";

export const setAppData = (state: []) => {
  return (dispatch: any) => {
    dispatch({
      type: "setAppData",
      payload: state,
    });
  };
};

export const setSelected = (state: Timeframes) => {
  return (dispatch: any) => {
    dispatch({
      type: "setTimeFrame",
      payload: state,
    });
  };
};
