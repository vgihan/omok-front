import styled from "@emotion/styled";
import TextRighteous from "../components/atoms/TextRighteous";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;
const Title = styled(TextRighteous)`
  margin: 150px 0px 0px 0px;
  font-size: 10vw;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Title>O-MOK</Title>
    </Container>
  );
};

export default Main;
