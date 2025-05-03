import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "./WeatherAPI";
import { addToHistory } from "../searchHistory/SearchHistorySlice";

interface WeatherData {
    temperature: number;
    humidity: number;
    windSpeedInKmh: number;
    city: string;
    icon: string;
    description: string;
    date: string;
    time: string
}
interface WeatherState {
    isLoading: boolean;
    data: WeatherData | null;
    error: string | null;
}

//initial state of the weather slice
const initialState: WeatherState = {
    isLoading: false,
    data: null,
    error: null,
};

//creating fetchWeather thunk to fetch weather data
export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city: string, { dispatch }) => {
        const data = await fetchWeatherData(city);

        if (data) {
            dispatch(addToHistory(data));
        }


        return data;
    }
);


//weather slice to handle weather data
const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true;
            console.log("Loading...");
            state.error = null;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.isLoading = false;

            state.data = action.payload;
            console.log(state.data);
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.data = null
            state.error = action.error.message || "Something went wrong!";
        });
    },
});

export default weatherSlice.reducer;
