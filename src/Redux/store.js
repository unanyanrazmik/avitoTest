import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reposReducer from "./repos-reducer";
import descriptionReducer from "./description-reducer";
import throttle from "lodash/throttle"
import {loadState, saveState} from "./localStorage";


let reducers = combineReducers({
    reposPage: reposReducer,
    descriptionPage: descriptionReducer
});

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunkMiddleware));

store.subscribe(throttle(() => {
    saveState({
        reposPage: store.getState().reposPage});
},1000));

export default store;
