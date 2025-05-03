import { FaWind } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useEffect } from "react";
import { fetchWeather } from "../../../features/weather/WeatherSlice";
import WeatherSkeleton from "../../WeatherSkeleton/WeatherSkeleton";
import { CgUnavailable } from "react-icons/cg";

const WeatherInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const city = "Karachi";
    dispatch(fetchWeather(city));
  }, [dispatch]);

  if (isLoading) return <WeatherSkeleton />;

  return (
    <div className="w-full max-w-xs mx-auto mt-5 p-5 rounded-3xl text-center">
      {/* Weather Icon */}
      <div className="mb-2">
        {data?.icon ? (
          <img
            src={`https://openweathermap.org/img/wn/${data?.icon}.png`}
            alt="weather icon"
            className="w-25 h-25 mx-auto"
          />
        ) : (
          <CgUnavailable className="w-25 h-25 mx-auto" />
        )}
      </div>

      {/* Temperature */}
      <h1 className="text-5xl font-bold">
        {data?.temperature !== undefined ? `${data.temperature}°C` : "--°C"}
      </h1>
      <h2 className="text-2xl font-light mt-2">{data?.city || ""}</h2>

      {/* Weather Info Row */}
      <div className="flex justify-between items-center mt-8 px-1 md:px-4 text-sm">
        <div className="flex flex-col items-center gap-1">
          <BsDropletHalf className="text-2xl mb-1" />
          <span className="text-lg font-medium">
            {data?.humidity !== undefined ? `${data.humidity}%` : "--"}
          </span>
          <span className="text-xs opacity-70">Humidity</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FaWind className="text-xl mb-1" />
          <span className="text-lg font-medium">
            {data?.windSpeedInKmh !== undefined
              ? `${data.windSpeedInKmh.toFixed(1)} km/h`
              : "--"}
          </span>
          <span className="text-xs opacity-70">Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
