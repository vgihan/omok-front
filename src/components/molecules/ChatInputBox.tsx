import styled from "@emotion/styled";
import React, { KeyboardEventHandler, useState } from "react";
import theme from "~styles/theme";
import { Chat } from "~types/chat";
import ButtonRound from "~components/atoms/ButtonRound";
import TextInput from "~components/atoms/TextInput";

const ChatTextInput = styled(TextInput)`
  font-family: roboto;
  font-size: 16px;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  color: ${theme.colors.lightGray};
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.lightCharcoal};
  width: 100%;
  height: 12%;
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
`;

const SendButton = styled(ButtonRound)`
  font-family: roboto;
  font-size: 16px;
  color: ${theme.colors.lightGray};
  background-color: transparent;
  border-radius: 0;
  border-left: 1px solid ${theme.colors.lightGray};
  width: 15%;
  height: 100%;
`;

type Props = {
  sendChat: (chat: Chat) => void;
};

const ChatInputBox: React.FC<Props> = ({ sendChat }: Props) => {
  const [chat, setChat] = useState("");

  const sendChatAndClear = () => {
    if (!chat) return;
    sendChat({ type: "all", sender: "vgihan", content: chat });
    setChat("");
  };
  const handleKeyUp: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      sendChatAndClear();
    }
  };

  return (
    <Container>
      <ChatTextInput
        className="chat"
        input={chat}
        setInput={setChat}
        onKeyUp={handleKeyUp}
      />
      <SendButton onClick={sendChatAndClear}>전송</SendButton>
    </Container>
  );
};

export default ChatInputBox;
