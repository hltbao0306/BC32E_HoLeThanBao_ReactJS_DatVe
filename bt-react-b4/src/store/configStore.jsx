import { combineReducers, legacy_createStore } from "redux";
import * as Reducer  from "./Reducer";

const rootReducer = combineReducers({
    ...Reducer,
});
export const store = legacy_createStore(rootReducer);