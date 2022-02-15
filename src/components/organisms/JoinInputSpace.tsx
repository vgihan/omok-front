import styled from "@emotion/styled";
import { useState } from "react";
import theme from "../../styles/theme";
import ButtonRound from "../atoms/ButtonRound";
import LabelTextInput from "../molecules/LabelTextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.cottonWhite};
  row-gap: 3vh;
`;
const JoinInput = styled(LabelTextInput)`
  width: 25vw;
  height: 50px;
`;
const JoinButton = styled(ButtonRound)`
  background-color: transparent;
  font-size: 50px;
  margin: 20px 0 0 0;
`;

const JoinInputSpace: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <Container>
      <JoinInput input={id} setInput={setId} fontSize={40}>
        ID
      </JoinInput>
      <JoinInput input={pw} setInput={setPw} fontSize={40}>
        PW
      </JoinInput>
      <JoinInput input={name} setInput={setName} fontSize={40}>
        NAME
      </JoinInput>
      <JoinButton>Join</JoinButton>
    </Container>
  );
};

export default JoinInputSpace;
