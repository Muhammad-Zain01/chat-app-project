"use client";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowRight } from "./icons";

export const ChatInput = () => {
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const handleKeyDown = () => {};
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
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
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message to ChatGPT..."
            spellCheck={false}
            className="min-h-[60px] w-full border-none focus-visible:outline-none  focus-within:border-none focus:border-none resize-none overflow-y-hidden bg-transparent px-4 py-[1.3rem] sm:text-sm shadow-none"
          />
        </div>
        <div className="absolute right-0 top-3 sm:right-2">
          <Button
            type="submit"
            size="icon"
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
