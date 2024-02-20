export const Threads = () => {
  return (
    <div className="w-full p-2">
      <p className="p-2 text-xs text-gray-400 font-bold">Today</p>
      {Array(3)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className="overflow-hidden text-gray-500 text-sm text-nowrap text-ellipsis text-sm p-2 rounded hover:bg-gray-300"
            >
              Thread {idx + 1}
            </div>
          );
        })}
      <p className="p-2 text-xs text-gray-400 font-bold">Yesterday</p>
      {Array(8)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className="overflow-hidden text-gray-500 text-sm text-nowrap text-ellipsis text-sm p-2 rounded hover:bg-gray-300"
            >
              Thread {idx + 1}
            </div>
          );
        })}
    </div>
  );
};
