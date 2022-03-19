import React, { useState } from "react";

import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/button/ButtonRound";
import TextInput from "~components/atoms/textInput/TextInput";
import { Chat } from "~types/model/Chat";
import { handlerUtil } from "~utils/Utils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightCharcoal};
  width: 100%;
  height: 12%;
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
`;

const ChatTextInput = styled(TextInput)`
  font-family: roboto;
  font-size: 16px;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightGray};
  width: 80%;
`;

const SendButton = styled.div``;

const ClearButton = styled(ButtonRound)`
  font-family: roboto;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: transparent;
  border-radius: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 15%;
  height: 100%;
`;

type Props = {
  sendChat: (chat: Chat) => void;
};

const ChatInputBox: React.FC<Props> = ({ sendChat }: Props) => {
  const [chat, setChat] = useState("");

  const send = () => chat && sendChat({ type: "all", sender: "vgihan", content: chat });
  const clearChat = () => setChat("");

  return (
    <Container>
      <ChatTextInput
        className="chat"
        value={chat}
        onChange={(e) => setChat(e.currentTarget.value)}
        onKeyUp={handlerUtil.enterKeyup(clearChat, send)}
      />
      <ClearButton onClick={clearChat}>
        <SendButton onClick={send}>전송</SendButton>
      </ClearButton>
    </Container>
  );
};

export default ChatInputBox;
