import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
//기존에 createStore와 비슷하지만 주의할 점은 {reducer: rootReducer}로 만들어 주어서 넣어야 함

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
