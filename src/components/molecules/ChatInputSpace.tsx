import styled from "@emotion/styled";
import React, { useState } from "react";
import theme from "../../styles/theme";
import ButtonRound from "../atoms/ButtonRound";
import TextInput from "../atoms/TextInput";

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

const ChatInputSpace: React.FC = () => {
  const [chat, setChat] = useState("");

  return (
    <Container>
      <ChatTextInput className="chat" input={chat} setInput={setChat} />
      <SendButton>전송</SendButton>
    </Container>
  );
};

export default ChatInputSpace;
