import { KeyboardEventHandler, useState } from "react";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { useFetchSignin } from "~api/index";
import ButtonRound from "~components/atoms/ButtonRound";
import Spinner from "~components/atoms/Spinner";
import TextInput from "~components/atoms/TextInput";
import TextRighteous from "~components/atoms/TextRighteous";
import { ErrorResponse } from "~types/errorResponse";
import { cookieUtil } from "~utils/Utils";

const InputLabel = styled(TextRighteous)`
  font-size: 30px;
  height: 30px;
`;

const LoginWaitSpinner = styled(Spinner)`
  position: absolute;
  top: 45%;
  left: 45%;
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
  font-size: 4vmin;
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
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoading, refetch } = useFetchSignin(
    { id, password },
    {
      enabled: false,
      onError: (err) => alert((err.response?.data as ErrorResponse).message),
      onSuccess: ({ data }: any) => {
        cookieUtil.setCookie("token", data.token);
        navigate("/lobby");
      },
    },
  );

  const handlePressEnter: KeyboardEventHandler = (e) => {
    if (e.key !== "Enter") return;
    refetch();
  };
  const handleClickLogin = () => {
    if (!id || !password) return alert("아이디 혹은 비밀번호를 입력해주세요.");
    refetch();
  };

  return (
    <Container>
      {isLoading && <LoginWaitSpinner />}
      <InputContainer>
        <Line>
          <InputLabel>ID</InputLabel>
          <LoginInput
            className="id"
            value={id}
            onChange={(e) => setId(e.currentTarget.value)}
            onKeyUp={handlePressEnter}
          ></LoginInput>
        </Line>
        <Line>
          <InputLabel>PW</InputLabel>
          <LoginInput
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyUp={handlePressEnter}
          ></LoginInput>
        </Line>
      </InputContainer>
      <ButtonContainer>
        <LoginButton onClick={handleClickLogin}>Login</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default LoginSpace;
