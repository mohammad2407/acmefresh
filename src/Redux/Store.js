
import { createStore } from "redux";
import { rootReducer } from "./Reducers/Index";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const loggerMiddleware = (store) => (next) => (action) =>{
    if(typeof action == "function"){
        return action(store.dispatch)
    }
    next(action)
}

export const store = createStore (
    rootReducer,
    applyMiddleware(thunk)
)