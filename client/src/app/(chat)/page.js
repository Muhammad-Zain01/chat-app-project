import { ChatInput } from "@/components/chat-input";
import { MainChatBox } from "@/components/main-chat-box";
import { Sidebar } from "@/components/sidebar";
import { ChatProvider } from "@/context/chat-context";
import { UserProvider } from "@/context/user-context";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const value = token?.value;
  if (!value) redirect("/login");

  return (
    <ChatProvider>
      <UserProvider>
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
      </UserProvider>
    </ChatProvider>
  );
}
