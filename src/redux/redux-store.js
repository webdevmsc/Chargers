import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import sessionsReducer from "./sessions-reducer";
import commonReducer from "./common-reducer";

let reducers = combineReducers({
    auth: authReducer,
    sessions: sessionsReducer,
    common: commonReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
