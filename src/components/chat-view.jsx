"use client";
import { useUser } from "@/context/user-context";
import { ChatGPT } from "./icons";

export const ChatView = ({ isBot, chat }) => {
  const { user } = useUser();
  return (
    <div className="flex my-4 flex-col">
      <div className="flex items-start">
        {!isBot ? (
          <div className="rounded-full text-sm bg-orange-600 p-4 w-[20px] h-[20px] flex justify-center items-center text-white">
            {user[0]?.username[0].toUpperCase()}
          </div>
        ) : (
          <div className="bg-green-600 p-1 rounded-full">
            <ChatGPT className="text-white size-5" />
          </div>
        )}
        <div>
          <div className="mt-1 ml-3 font-bold text-md">
            {!isBot ? "You" : "ChatGPT"}
          </div>
          <div className="mt-1 ml-3 text-sm">{chat}</div>
        </div>
      </div>
    </div>
  );
};
