import { combineReducers, createStore } from "@reduxjs/toolkit";
import { IHomeState, HomeReducer } from "./HomeState";

export interface IRootState {
    home: IHomeState;
}

const store = createStore(
    combineReducers({
        home: HomeReducer,
    })
);

export default store;
