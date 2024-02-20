import { Edit } from "lucide-react";
import { ChatGPT } from "./icons";
import { Button } from "./ui/button";
import { CreateNewChatButton } from "./create-new-chat";
import { AccountInformation } from "./account-information";
import { Threads } from "./threads";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-full justify-between">
      <CreateNewChatButton />
      <div className=" flex h-full">
        <Threads />
      </div>
      <AccountInformation />
    </div>
  );
};
