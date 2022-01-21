import styled from "@emotion/styled";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Sidebar from "../atoms/Sidebar";
import TextRighteous from "../atoms/TextRighteous";
import SidebarProfileBox from "../organisms/SidebarProfileBox";
import SidebarRankBox from "../organisms/SidebarRankBox";
import SidebarCommunityBox from "../organisms/SidebarCommunityBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 11vh;
  padding: 0px 0px 0px 20px;
  font-size: 30px;
`;

const MenuButton = styled.img`
  cursor: pointer;
`;

const Topbar: React.FC = () => {
  const TopbarRef = useRef(null);
  const { isClicked, setIsClicked } = useOutsideClick(TopbarRef);
  return (
    <Container>
      <div ref={TopbarRef}>
        <Sidebar isActive={isClicked}>
          <SidebarProfileBox />
          <SidebarRankBox />
          <SidebarCommunityBox />
        </Sidebar>
      </div>
      <MenuButton
        alt="collapsed_menu"
        src="img/collapsed_menu.svg"
        onClick={() => setIsClicked(true)}
      ></MenuButton>
      <TextRighteous>O-MOK</TextRighteous>
    </Container>
  );
};

export default Topbar;
