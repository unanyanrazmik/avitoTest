import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reposReducer from "./repos-reducer";
import descriptionReducer from "./description-reducer";


let reducers = combineReducers({
    reposPage: reposReducer,
    descriptionPage: descriptionReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;