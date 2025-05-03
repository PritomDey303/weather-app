import { FaWind } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import WeatherSkeleton from "../../WeatherSkeleton/WeatherSkeleton";
import { CgUnavailable } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeedInKmh: number;
  city: string;
  icon: string;
  description: string;
  date: string;
  time: string;
}
const WeatherInfo = () => {
  const { history } = useSelector((state: RootState) => state.searchHistory);
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.weather
  );
  console.log(error);
  const [displayData, setDisplayData] = useState<WeatherData | null>(null);
  const hasInitialized = useRef(false);
  //initiating the displayData with the last history data if available
  useEffect(() => {
    if (!hasInitialized.current) {
      if (history.length > 0 && !data && !error) {
        const last = history[history.length - 1];
        setDisplayData(last as WeatherData);
      }
      hasInitialized.current = true;
    } else if (data) {
      setDisplayData(data as WeatherData);
    } else if (error) {
      setDisplayData(null);
    }
  }, [history, data, error]);

  //handling loading state
  if (isLoading) return <WeatherSkeleton />;

  return (
    <div className="w-full max-w-xs mx-auto mt-5 p-5 rounded-3xl text-center">
      {/* Weather Icon */}
      <div className="mb-2">
        {displayData?.icon ? (
          <img
            src={`https://openweathermap.org/img/wn/${displayData.icon}.png`}
            alt="weather icon"
            className="w-25 h-25 mx-auto"
          />
        ) : (
          <CgUnavailable className="w-25 h-25 mx-auto" />
        )}
      </div>

      {/* Temperature */}
      <h1 className="text-5xl font-bold">
        {displayData?.temperature !== undefined
          ? `${displayData.temperature}°C`
          : "--"}
      </h1>
      <h2 className="text-2xl font-light mt-2">{displayData?.city || ""}</h2>
      <p className="text-lg opacity-70 mt-1">
        {displayData?.description || "--"}
      </p>

      {/* Weather Info Row */}
      <div className="flex justify-between items-center mt-8 px-1 md:px-4 text-sm">
        <div className="flex flex-col items-center gap-1">
          <BsDropletHalf className="text-2xl mb-1" />
          <span className="text-lg font-medium">
            {displayData?.humidity !== undefined
              ? `${displayData.humidity}%`
              : "--"}
          </span>
          <span className="text-xs opacity-70">Humidity</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FaWind className="text-xl mb-1" />
          <span className="text-lg font-medium">
            {displayData?.windSpeedInKmh !== undefined
              ? `${displayData.windSpeedInKmh.toFixed(1)} km/h`
              : "--"}
          </span>
          <span className="text-xs opacity-70">Wind Speed</span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mt-6">
          <p className="text-md font-bold">{error}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
