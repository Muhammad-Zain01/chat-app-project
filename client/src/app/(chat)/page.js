import { ChatInput } from "@/components/chat-input";
import { MainChatBox } from "@/components/main-chat-box";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex h-[100vh]">
      <div className="flex w-[250px] bg-gray-200">
        <Sidebar />
      </div>
      <div className="flex flex-col  justify-between w-10/12">
        <div className="h-full overflow-y-scroll">
          <MainChatBox />
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </main>
  );
}
