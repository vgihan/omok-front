import styled from "@emotion/styled";
import { useState } from "react";
import TextInput from "../atoms/TextInput";
import TextRighteous from "../atoms/TextRighteous";
import ButtonRound from "../atoms/ButtonRound";

const InputLabel = styled(TextRighteous)`
  font-size: 30px;
  height: 30px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 60px;
`;

const LoginInput = styled(TextInput)`
  font-size: 30px;
  width: 275px;
  height: 100%;
`;

const LoginButton = styled(ButtonRound)`
  background-color: transparent;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
`;

const LoginSpace: React.FC = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <Container>
      <InputContainer>
        <Line>
          <InputLabel>ID</InputLabel>
          <LoginInput className="id" setInput={setId} input={id}></LoginInput>
        </Line>
        <Line>
          <InputLabel>PW</InputLabel>
          <LoginInput
            className="pw"
            setInput={setPw}
            input={pw}
            isPassword
          ></LoginInput>
        </Line>
      </InputContainer>
      <ButtonContainer>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default LoginSpace;
