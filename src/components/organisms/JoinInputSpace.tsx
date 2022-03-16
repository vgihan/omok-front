import { useState } from "react";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import ButtonRound from "~components/atoms/ButtonRound";
import TextRoboto from "~components/atoms/TextRoboto";
import LabelTextInput from "~components/molecules/LabelTextInput";
import { useFetchSignup } from "~queries/index";
import { ErrorResponse } from "~types/response/ErrorResponse";

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

  const { mutate } = useFetchSignup({
    onSuccess: () => {
      navigate("/");
      alert("회원가입에 성공했습니다 ! 새로 로그인 해주세요 ^_^");
    },
    onError: (err) => {
      alert((err as ErrorResponse).message);
    },
  });

  const handleClickJoinBtn = () => {
    mutate({ id, password });
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
