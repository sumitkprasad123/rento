import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {reducer as AppReducer} from "./app/reducer"

const rootReducer = combineReducers({
    AppReducer
})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}