import { combineReducers } from "redux";
import UserReducer from "./reducerUsers";
import ActiveUserReducer from "./reducerActiveUser";

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;
