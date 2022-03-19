import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Anchor from "~components/atoms/button/Anchor";
import TextRighteous from "~components/atoms/text/TextRighteous";
import LoginSpace from "~components/organisms/main/LoginSpace";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;

  width: 100%;
  height: 100%;
  background-color: #423e3e;
`;

const Title = styled(TextRighteous)`
  font-size: 7vw;
  color: white;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled(Box)`
  height: 40%;
`;

const ContentBox = styled(Box)`
  row-gap: 20px;
  height: 20%;
  color: white;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <TitleBox>
        <Title>O-MOK</Title>
      </TitleBox>
      <ContentBox>
        <LoginSpace />
        <Link to="/join">
          <Anchor>Join</Anchor>
        </Link>
      </ContentBox>
    </Container>
  );
};

export default Main;
