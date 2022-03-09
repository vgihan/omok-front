import styled from "@emotion/styled";
import { useState } from "react";
import { useSignin } from "~api/index";
import { setCookie } from "~utils/cookie";
import TextInput from "~components/atoms/TextInput";
import TextRighteous from "~components/atoms/TextRighteous";
import ButtonRound from "~components/atoms/ButtonRound";
import LoadingCircle from "~components/atoms/LoadingCircle";
import { ErrorResponse } from "~types/errorResponse";
import { useNavigate } from "react-router-dom";

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
  const { isLoading, refetch } = useSignin(
    { id, password },
    {
      enabled: false,
      onError: (err) => alert((err.response?.data as ErrorResponse).message),
      onSuccess: ({ data }: any) => {
        setCookie("token", data.token, { httpOnly: true });
        navigate("/lobby");
      },
    }
  );

  const handleClickLogin = () => {
    if (!id || !password) return alert("아이디 혹은 비밀번호를 입력해주세요.");
    refetch();
  };

  return (
    <Container>
      {isLoading && <LoadingCircle></LoadingCircle>}
      <InputContainer>
        <Line>
          <InputLabel>ID</InputLabel>
          <LoginInput className="id" setInput={setId} input={id}></LoginInput>
        </Line>
        <Line>
          <InputLabel>PW</InputLabel>
          <LoginInput
            className="password"
            setInput={setPassword}
            input={password}
            isPassword
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
