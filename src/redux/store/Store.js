import { configureStore, combineReducers} from "@reduxjs/toolkit";
import songsReducer from "../reducers/Reduces";
import braniReducer from "../reducers/Songs";

const mainReducer=combineReducers({
    fav:songsReducer,
    song:braniReducer
})

const store = configureStore({
  reducer: mainReducer,
});

export default store;
