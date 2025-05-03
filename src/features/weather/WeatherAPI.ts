

export const fetchWeatherData = async (city: string) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        const now = new Date();
        return {

            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            windSpeedInKmh: data.wind.speed * 3.6,
            city: data.name,
            icon: data.weather[0].icon,
            description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString()
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}