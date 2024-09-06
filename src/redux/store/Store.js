import { configureStore, combineReducers} from "@reduxjs/toolkit";
import songsReducer from "../reducers/Reduces";


const store = configureStore({
  reducer: songsReducer,
});

export default store;
