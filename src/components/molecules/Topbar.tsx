import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import TextRighteous from "../atoms/TextRighteous";

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 110px;
  padding: 0px 0px 0px 20px;
  font-size: 30px;
`;

const MenuButton = styled.img`
  cursor: pointer;
`;

type Props = {
  onClickMenu: Function;
};

const Topbar: React.FC<Props> = ({ onClickMenu }: Props) => {
  const handleOnClickMenu: MouseEventHandler = (e) => onClickMenu();
  return (
    <Container>
      <MenuButton
        alt="collapsed_menu"
        src="img/collapsed_menu.svg"
        onClick={handleOnClickMenu}
      ></MenuButton>
      <TextRighteous>O-MOK</TextRighteous>
    </Container>
  );
};

export default Topbar;
