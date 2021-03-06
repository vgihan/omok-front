import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/text/TextRighteous";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  height: 2px;
  margin: 0px 0px 60px 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0px 0px 60px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0px 0px 40px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0px 0px 20px 0px;
  }
`;

const WordBox = styled(TextRighteous)`
  background-color: ${({ theme }) => theme.colors.cottonWhite};
  padding: 10px;
  color: black;
  font-size: 3vmin;
`;

const SidebarBoxTitle: React.FC = ({ children }) => {
  return (
    <Container>
      <WordBox>{children}</WordBox>
    </Container>
  );
};

export default SidebarBoxTitle;
