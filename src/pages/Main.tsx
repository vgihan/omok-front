import styled from "@emotion/styled";
import TextRighteous from "../components/atoms/TextRighteous";
import LoginSpace from "../components/organisms/LoginSpace";

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
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled(Box)`
  height: 40%;
`;

const ContentBox = styled(Box)`
  height: 20%;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <TitleBox>
        <Title>O-MOK</Title>
      </TitleBox>
      <ContentBox>
        <LoginSpace></LoginSpace>
      </ContentBox>
    </Container>
  );
};

export default Main;
