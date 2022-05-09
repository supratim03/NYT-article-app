import { combineReducers } from "redux";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
	SearchReducer: SearchReducer
});

export default rootReducer;
