"use client";
import { useChat } from "@/context/chat-context";
import { ChatGPT } from "./icons";
import { SuggestionCard } from "./suggestion-card";
import { askToChatGPT } from "@/requests/requests";

export const InitialScreen = () => {
  const { addChat } = useChat();
  const addShortCutChat = async (chat) => {
    addChat({ type: "user", value: chat });
    const response = await askToChatGPT(chat);
    if (response) {
      addChat({ type: "bot", value: response?.output });
    } else {
      alert("You are not Authenticated");
    }
  };
  return (
    <div className="p-4 px-32 containe">
      <div className="flex flex-col items-center mt-24 w-full">
        <ChatGPT className="size-8 mb-4" />
        <h1 className="font-semibold text-2xl">How can I help you today?</h1>
      </div>
      <div className="mt-32 px-10">
        <div className="flex">
          <SuggestionCard
            title="write a thank you note"
            subTitle="to a guest speaker for my class"
            onClick={() =>
              addShortCutChat(
                "write a thank you note to a guest speaker for my class"
              )
            }
          />
          <SuggestionCard
            title="write a course overview"
            subTitle="on the psychology behind decision-making"
            onClick={() =>
              addShortCutChat(
                "write a course overview on the psychology behind decision-making"
              )
            }
          />
        </div>
        <div className="flex">
          <SuggestionCard
            title="Explain super conductor"
            subTitle="like I am five years old"
            onClick={() =>
              addShortCutChat(
                "Explain super conductor like I am five years old"
              )
            }
          />
          <SuggestionCard
            title="write a message"
            subTitle="that goes with a kitten gif"
            onClick={() =>
              addShortCutChat("write a message that goes with a kitten gif")
            }
          />
        </div>
      </div>
    </div>
  );
};
