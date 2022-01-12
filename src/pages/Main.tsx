import styled from "@emotion/styled";
import TextRighteous from "../components/atoms/TextRighteous";
import LoginSpace from "../components/organisms/LoginSpace";
import Anchor from "../components/atoms/Anchor";

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
`;

const Main: React.FC = () => {
  return (
    <Container>
      <TitleBox>
        <Title>O-MOK</Title>
      </TitleBox>
      <ContentBox>
        <LoginSpace />
        <Anchor href="#">Join</Anchor>
      </ContentBox>
    </Container>
  );
};

export default Main;
