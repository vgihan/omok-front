import { useState } from "react";
import { Chat } from "../../types/chat";
import ChatInputBox from "../molecules/ChatInputBox";
import ChatRecordBox from "../molecules/ChatRecordBox";

const ChatSpace: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  const sendChat = (chat: Chat) => {
    setChats((prevState: Chat[]) => [chat, ...prevState]);
  };

  return (
    <>
      <ChatRecordBox chats={chats} />
      <ChatInputBox sendChat={sendChat} />
    </>
  );
};

export default ChatSpace;
