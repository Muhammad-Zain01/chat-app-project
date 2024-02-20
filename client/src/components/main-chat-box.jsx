"use client";
import { useChat } from "@/context/chat-context";
import { ChatView } from "./chat-view";
import { InitialScreen } from "./initial-screen";
import { Loader } from "./loader";

export const MainChatBox = () => {
  const { chats, loading } = useChat();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {chats && chats.length == 0 ? (
        <InitialScreen />
      ) : (
        <div className="container flex flex-col px-32 lg:px-64 pt-12 ">
          {chats &&
            chats.map((item, idx) => {
              return (
                <ChatView
                  key={idx}
                  isBot={item.type == "bot" ? true : false}
                  chat={item.value}
                />
              );
            })}
        </div>
      )}
    </>
  );
};
