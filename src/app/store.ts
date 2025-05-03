import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/WeatherSlice";
import searchHistoryReducer from "../features/searchHistory/SearchHistorySlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        searchHistory: searchHistoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
