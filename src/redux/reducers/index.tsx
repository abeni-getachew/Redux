import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import selectedReducer from "./selectedReducer";

const reducers = combineReducers({
  appData: dataReducer,
  selected: selectedReducer,
});

export default reducers;
