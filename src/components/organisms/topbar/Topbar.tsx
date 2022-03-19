import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/text/TextRighteous";
import Portal from "~components/molecules/Portal";
import Sidebar from "~components/molecules/Sidebar";
import UserInfoBox from "~components/organisms/sidebar/UserInfoBox";
import useOutsideClick from "~hooks/useOutsideClick";

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 11vh;
  padding: 0px 0px 0px 20px;
  font-size: 30px;
  color: white;
`;

const MenuButton = styled.img`
  cursor: pointer;
`;

const Topbar: React.FC = () => {
  const { isClicked, setIsClicked } = useOutsideClick();
  return (
    <Container>
      <Portal>
        <Sidebar isActive={isClicked}>
          <UserInfoBox />
        </Sidebar>
      </Portal>
      <MenuButton alt="collapsed_menu" src="img/collapsed_menu.svg" onClick={() => setIsClicked(true)}></MenuButton>
      <TextRighteous>O-MOK</TextRighteous>
    </Container>
  );
};

export default Topbar;
