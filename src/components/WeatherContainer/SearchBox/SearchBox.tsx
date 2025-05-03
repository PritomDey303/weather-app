import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { fetchWeather } from "../../../features/weather/WeatherSlice";

const SearchBox = () => {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city.trim()));
    } else {
      alert("Please enter a city name.");
    }
    setCity("");
  };

  return (
    <div>
      <form
        className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 shadow-md max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
          className="flex-1 w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="ml-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
