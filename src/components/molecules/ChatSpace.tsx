import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Container = styled.div`
  background-color: ${theme.colors.darkGray};
  box-sizing: border-box;
  opacity: 54;
  width: 100%;
  height: 88%;
  padding: 25px;
`;

const Line = styled.div`
  background-color: ${theme.colors.cottonWhite};
  height: 1px;
  opacity: 50%;
`;

const ChatSpace: React.FC = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default ChatSpace;
