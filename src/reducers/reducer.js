import { combineReducers } from "redux";
import signInReducer from "./signInReducer"
import signUpReducer from "./signUpReducer"
import createTaskReducer from "./createTaskReducer"

const rootReducer = combineReducers ({
    signInReducer,
    signUpReducer,
    createTaskReducer,
});
export default rootReducer;
