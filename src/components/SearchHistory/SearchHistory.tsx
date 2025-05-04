import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import HistoryModal from "./HistoryModal/HistoryModal";

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

      {/* Modal for search history */}
      <HistoryModal
        showModal={showModal}
        setShowModal={setShowModal}
        reversedHistory={reversedHistory}
      />
    </>
  );
};

export default SearchHistory;
