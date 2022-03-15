import { useState } from "react";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { useFetchSignup } from "~api/index";
import ButtonRound from "~components/atoms/ButtonRound";
import TextRoboto from "~components/atoms/TextRoboto";
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
const InputState = styled(TextRoboto)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const JoinInputSpace: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPw, setCheckedPw] = useState("");

  const navigate = useNavigate();

  const { refetch } = useFetchSignup(
    { id, password },
    {
      enabled: false,
      onSuccess: () => {
        alert("로그인에 성공했습니다 ! 새로 로그인 해주세요 ^_^");
        navigate("/");
      },
      onError: (err) => {
        alert(err.response?.data.message);
      },
    },
  );

  const handleClickJoinBtn = () => {
    refetch();
  };

  return (
    <Container>
      <JoinInput value={id} onChange={(e) => setId(e.currentTarget.value)}>
        ID
      </JoinInput>
      <JoinInput type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}>
        PW
      </JoinInput>
      <JoinInput type="password" value={checkedPw} onChange={(e) => setCheckedPw(e.currentTarget.value)}>
        Check PW
      </JoinInput>
      <InputState>{password && checkedPw && password !== checkedPw && "비밀번호와 동일하게 입력하세요"}</InputState>
      <JoinButton disabled={!password || password !== checkedPw} onClick={handleClickJoinBtn}>
        Join
      </JoinButton>
    </Container>
  );
};

export default JoinInputSpace;
