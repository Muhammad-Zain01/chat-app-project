import { ChatView } from "./chat-view";
import { InitialScreen } from "./initial-screen";

export const MainChatBox = () => {
  return (
    <>
      <div className="container flex flex-col px-64 pt-12 ">
        <ChatView isBot={false} chat={"How to get Alot of Moeny"} />
        <ChatView isBot={true} chat={"How to get Alot of Moeny"} />
      </div>
      {/* <InitialScreen /> */}
    </>
  );
};
