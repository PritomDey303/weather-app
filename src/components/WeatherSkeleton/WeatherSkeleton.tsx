const WeatherSkeleton = () => {
  return (
    <div className="w-full max-w-xs mx-auto mt-10 p-5 rounded-3xl text-center bg-transparent dark:bg-gray-800 shadow-lg">
      {/* Weather Icon Skeleton */}
      <div className="mb-2">
        <div className="h-20 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>

      {/* Temperature Skeleton */}
      <div className="h-14 w-32 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-3"></div>

      {/* City Skeleton */}
      <div className="h-6 w-40 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-6"></div>

      {/* Weather Info Row Skeleton */}
      <div className="flex justify-between items-center mt-6 px-1 md:px-4 text-sm">
        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-1"></div>
          <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-1"></div>
          <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
