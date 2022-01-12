import styled from "@emotion/styled";
import theme from "../../styles/theme";
import TextRighteous from "../atoms/TextRighteous";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: ${theme.colors.lightGray};
  height: 2px;
`;

const WordBox = styled(TextRighteous)`
  background-color: ${theme.colors.cottonWhite};
  padding: 10px;
  color: black;
  font-size: 30px;
`;

const SidebarBoxTitle: React.FC = ({ children }) => {
  return (
    <Container>
      <WordBox>{children}</WordBox>
    </Container>
  );
};

export default SidebarBoxTitle;
