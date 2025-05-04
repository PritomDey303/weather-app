import { useEffect, useState } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import ModeToggler from "./components/ModeToggler/ModeToggler";
import Title from "./components/Title/Title";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //cheking local storage for mode
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  //toggle mode function
  const toggleMode = () => {
    if (isDarkMode) {
      localStorage.setItem("mode", "light");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("mode", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="w-full min-h-screen px-5 py-7 bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
        <Title />

        <ModeToggler isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <WeatherContainer />
        <SearchHistory />
      </div>
    </div>
  );
}

export default App;
