import React from "react";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

interface ModeTogglerProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const ModeToggler: React.FC<ModeTogglerProps> = ({
  isDarkMode,
  toggleMode,
}) => {
  return (
    <div
      onClick={toggleMode}
      className={`absolute top-7 right-5 w-16 h-9 flex items-center px-1 rounded-full cursor-pointer shadow-lg transition-colors duration-300
        ${isDarkMode ? "bg-indigo-300" : "bg-gray-600"}`}
    >
      <div
        className={`w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-sm transition-transform duration-300
          ${isDarkMode ? "translate-x-7" : "translate-x-0"}`}
      >
        {isDarkMode ? <FiSun /> : <FaRegMoon />}
      </div>
    </div>
  );
};

export default ModeToggler;
