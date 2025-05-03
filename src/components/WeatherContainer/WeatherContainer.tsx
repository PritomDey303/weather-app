import SearchBox from "./SearchBox/SearchBox";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

const WeatherContainer = () => {
  return (
    <div
      className="  p-10 mt-12 rounded-xl  mx-auto shadow-xl md:w-1/3  bg-gradient-to-br from-indigo-300 to-blue-100 
                    dark:from-black dark:to-gray-800
                    text-black dark:text-white "
    >
      <SearchBox />
      <WeatherInfo />
    </div>
  );
};

export default WeatherContainer;
