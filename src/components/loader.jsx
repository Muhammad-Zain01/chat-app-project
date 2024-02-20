const { ChatGPT } = require("./icons");

export const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <ChatGPT className="size-20 animate-spin" />
    </div>
  );
};
