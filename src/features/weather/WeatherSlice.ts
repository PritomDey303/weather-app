import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "./WeatherAPI";

interface WeatherData {
    temperature: number;
    humidity: number;
    windSpeedInKmh: number;
    city: string;
    icon: string;
    description: string;
}
interface WeatherState {
    isLoading: boolean;
    data: WeatherData | null;
    error: string | null;
}

const initialState: WeatherState = {
    isLoading: false,
    data: null,
    error: null,
};

//action to fetch the weather data
export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city: string) => {
    const weatherData = fetchWeatherData(city);
    return weatherData;
})


//slice to handle the weather data
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
