import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./filter/filterSlice";

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer, // Provide the rootReducer, which combines all your slice reducers
    middleware: [...middleware],
    devTools: composeWithDevTools(),
    preloadedState: initialState,
});

export default store;