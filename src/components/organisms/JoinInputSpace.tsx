import { useState } from "react";

import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/ButtonRound";
import LabelTextInput from "~components/molecules/LabelTextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.cottonWhite};
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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkedPw, setCheckedPw] = useState("");
  return (
    <Container>
      <JoinInput value={id} onChange={(e) => setId(e.currentTarget.value)}>
        ID
      </JoinInput>
      <JoinInput type="password" value={pw} onChange={(e) => setPw(e.currentTarget.value)}>
        PW
      </JoinInput>
      <JoinInput type="password" value={checkedPw} onChange={(e) => setCheckedPw(e.currentTarget.value)}>
        Check PW
      </JoinInput>
      <JoinButton>Join</JoinButton>
    </Container>
  );
};

export default JoinInputSpace;
