import { useState } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import ModeToggler from "./components/ModeToggler/ModeToggler";
import Title from "./components/Title/Title";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="w-full min-h-screen px-5 py-7 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
        <Title />

        <ModeToggler isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
