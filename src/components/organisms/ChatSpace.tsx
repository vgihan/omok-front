import ChatInputBox from "../molecules/ChatInputBox";
import ChatRecordBox from "../molecules/ChatRecordBox";

const ChatSpace: React.FC = () => {
  return (
    <>
      <ChatRecordBox />
      <ChatInputBox />
    </>
  );
};

export default ChatSpace;
