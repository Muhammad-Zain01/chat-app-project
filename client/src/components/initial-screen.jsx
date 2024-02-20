import { ChatGPT } from "./icons";
import { SuggestionCard } from "./suggestion-card";

export const InitialScreen = () => {
  return (
    <div className="p-4 px-32 containe">
      <div className="flex flex-col items-center mt-24 w-full">
        <ChatGPT className="size-8 mb-4" />
        <h1 className="font-semibold text-2xl">How can I help you today?</h1>
      </div>
      <div className="mt-32 px-10">
        <div className="flex">
          <SuggestionCard />
          <SuggestionCard />
        </div>
        <div className="flex">
          <SuggestionCard />
          <SuggestionCard />
        </div>
      </div>
    </div>
  );
};
