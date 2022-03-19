import { useState } from "react";

import ChatInputBox from "~components/molecules/ChatInputBox";
import ChatRecordBox from "~components/molecules/ChatRecordBox";
import { Chat } from "~types/model/Chat";

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
