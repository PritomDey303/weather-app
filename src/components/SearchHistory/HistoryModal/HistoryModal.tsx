import { AnimatePresence, motion } from "framer-motion";

interface historyProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  reversedHistory: {
    city: string;
    description: string;
    time: string;
    date: string;
    temperature: number;
    humidity: number;
    windSpeedInKmh: number;
  }[];
}

function HistoryModal({
  showModal,
  setShowModal,
  reversedHistory,
}: historyProps) {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 text-black dark:text-white w-full max-w-md rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
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
                      | Wind: {entry.windSpeedInKmh.toFixed(2)} km/h
                    </div>
                  </li>
                ))
              ) : (
                <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-center text-gray-600 dark:text-gray-300">
                  No search history available.
                </li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HistoryModal;
