import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const SearchHistory = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { history } = useSelector((state: RootState) => state.searchHistory);
  const reversedHistory = [...history].reverse();

  return (
    <>
      {/* search History button */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-600 text-white text-sm sm:text-base rounded-full shadow-md hover:bg-gray-500 transition-all duration-200 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className=" xs:inline">History</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white w-full max-w-md rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="pb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Search History
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Your last 5 searches are displayed here.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-red-600 hover:text-red-800 text-3xl sm:text-4xl font-bold"
              >
                &times;
              </button>
            </div>

            <ul className="space-y-3 mt-4">
              {reversedHistory.length > 0 ? (
                reversedHistory.map((entry, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-sm sm:text-base"
                  >
                    <div className="font-medium text-base sm:text-lg">
                      {entry.city}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {entry.description} — {entry.time} • {entry.date}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Temp: {entry.temperature}°C | Humidity: {entry.humidity}%
                      | Wind: {entry.windSpeedInKmh} km/h
                    </div>
                  </li>
                ))
              ) : (
                <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-center text-gray-600 dark:text-gray-300">
                  No search history available.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchHistory;
