import { Edit } from "lucide-react";
import { ChatGPT } from "./icons";
import { Button } from "./ui/button";

export const CreateNewChatButton = () => {
  return (
    <>
      <div className="p-2">
        <Button
          variant="ghost"
          className="w-full flex justify-between hover:bg-gray-300"
        >
          <div className="flex items-center">
            <ChatGPT className="mr-2" />
            New Chat
          </div>
          <Edit size={16} />
        </Button>
      </div>
      
    </>
  );
};
