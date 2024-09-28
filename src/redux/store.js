import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/camperSlice";
import filterReucer from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReucer,
  },
});
