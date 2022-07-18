import { combineReducers } from "redux";

import { HydroPonicReducer } from "./HydroPonicReducer";

export const rootReducer = combineReducers({
    hydroPonicStore: HydroPonicReducer
})