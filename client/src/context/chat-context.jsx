"use client";
import { getAllChats } from "@/requests/requests";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const defaultValues = {
  chats: [],
  setChats: (chat) => {},
  addChat: (chat) => {},
  loading: true,
  setLoading: (value) => {},
};
const ChatContext = createContext(defaultValues);

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const getData = async () => {
    setLoading(true);
    const response = await getAllChats();

    if (response) {
      const chatData = [];
      if (response) {
        if (response?.detail == "Invalid token.") {
          router.push("/login");
        } else {
          Array.isArray(response) &&
            response.map((item) => {
              chatData.push({ type: "user", value: item.input });
              chatData.push({ type: "bot", value: item.output });
            });
          setChats(chatData);
          setLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addChat = (chat) => setChats((prevChats) => [...prevChats, chat]);
  const value = {
    chats,
    setChats,
    addChat,
    loading,
    setLoading,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
