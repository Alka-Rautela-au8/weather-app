import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";

const rootReducer = combineReducers({
    weatherState : weatherReducer, 
})

export default rootReducer;