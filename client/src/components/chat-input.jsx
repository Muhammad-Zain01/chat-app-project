"use client";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowRight } from "./icons";
import { askToChatGPT } from "@/requests/requests";
import { useChat } from "@/context/chat-context";

export const ChatInput = () => {
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { addChat } = useChat();
  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e?.which == 13) {
      onSubmit();
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const onSubmit = async () => {
    if (input != "") {
      setLoading(true);
      addChat({ type: "user", value: input });
      setInput((prev) => "");
      const response = await askToChatGPT(input);
      if (response) {
        addChat({ type: "bot", value: response?.output });
      } else {
        alert("You are not Authenticated");
      }

      setLoading(false);
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="p-4 px-32 container">
      <div className="relative flex flex-col w-full  max-h-60 grow bg-background sm:rounded-md sm:border sm:px-2">
        <div className="pr-8">
          <Textarea
            ref={inputRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            rows={1}
            value={input}
            onChange={onChange}
            placeholder="Message to ChatGPT..."
            spellCheck={false}
            className="min-h-[60px] w-full border-none focus-visible:outline-none  focus-within:border-none focus:border-none resize-none overflow-y-hidden bg-transparent px-4 py-[1.3rem] sm:text-sm shadow-none"
          />
        </div>
        <div className="absolute right-0 top-3 sm:right-2">
          <Button
            type="submit"
            size="icon"
            onClick={onSubmit}
            disabled={isLoading || input === ""}
          >
            <ArrowRight />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
