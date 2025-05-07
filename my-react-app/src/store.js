import { createStore, applyMiddleware, combineReducers} from "redux"
import { thunk } from "redux-thunk"
import characterReducer from "./reducers/characterReducer"
import characterDetailReducer from "./reducers/characterDetailReducer"
import characterSearchReducer from "./reducers/characterSearchReducer"


const rootReducer = combineReducers({
    characterReducer,
    characterDetailReducer,
    characterSearchReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

