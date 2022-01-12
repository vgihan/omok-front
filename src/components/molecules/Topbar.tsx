import styled from "@emotion/styled";
import TextRighteous from "../atoms/TextRighteous";

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 80px;
  padding: 0px 0px 0px 20px;
  font-size: 30px;
`;

const MenuButton = styled.img`
  cursor: pointer;
`;

const Topbar: React.FC = () => {
  return (
    <Container>
      <MenuButton
        alt="collapsed_menu"
        src="img/collapsed_menu.svg"
      ></MenuButton>
      <TextRighteous>O-MOK</TextRighteous>
    </Container>
  );
};

export default Topbar;
