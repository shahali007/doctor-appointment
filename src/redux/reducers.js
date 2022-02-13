import { combineReducers } from "redux";
import appointments from "./appointments/reducer";

const reducers = combineReducers({
  appointments,
});
export default reducers;
