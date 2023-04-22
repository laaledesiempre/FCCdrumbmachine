import { configureStore } from "@reduxjs/toolkit";
import { displayReducer } from "./slices/display";

export const store= configureStore({
    reducer: {
        displayReducer,
    }
})