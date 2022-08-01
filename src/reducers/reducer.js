import { combineReducers } from "redux";
import signInReducer from "./signInReducer"
import signUpReducer from "./signUpReducer"
import createTaskReducer from "./createTaskReducer"
import saveListReducer from "./saveListReducer"
const rootReducer = combineReducers ({
    signInReducer,
    signUpReducer,
    createTaskReducer,
    saveListReducer
});
export default rootReducer;
