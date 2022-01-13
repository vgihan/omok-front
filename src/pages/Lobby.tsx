import styled from "@emotion/styled";
import useOutsideClick from "../hooks/useOutsideClick";
import ButtonRound from "../components/atoms/ButtonRound";
import TextRighteous from "../components/atoms/TextRighteous";
import Topbar from "../components/molecules/Topbar";
import Sidebar from "../components/atoms/Sidebar";
import SidebarProfileBox from "../components/organisms/SidebarProfileBox";
import SidebarRankBox from "../components/organisms/SidebarRankBox";
import SidebarCommunityBox from "../components/organisms/SidebarCommunityBox";
import theme from "../styles/theme";
import { useRef } from "react";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10vw;
`;

const PlayText = styled(TextRighteous)`
  font-size: 150px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 150px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 100px;
  }
`;

const SubText = styled(TextRighteous)`
  font-size: 70px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 70px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 50px;
  }
`;

const ModeButton = styled(ButtonRound)`
  color: black;
  background-color: ${theme.colors.lightGray};
  font-size: 40px;
  width: 230px;
  height: 230px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 40px;
    width: 230px;
    height: 230px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 25px;
    width: 130px;
    height: 130px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 15px;
    width: 80px;
    height: 80px;
  }
`;

const Lobby: React.FC = () => {
  const TopbarRef = useRef(null);
  const { isClicked, setIsClicked } = useOutsideClick(TopbarRef);

  return (
    <>
      <div ref={TopbarRef}>
        <Sidebar isActive={isClicked}>
          <SidebarProfileBox />
          <SidebarRankBox />
          <SidebarCommunityBox />
        </Sidebar>
      </div>
      <Topbar onClickMenu={() => setIsClicked(true)} />
      <TitleContainer>
        <PlayText>PLAY</PlayText>
        <SubText>O-MOK</SubText>
      </TitleContainer>
      <ButtonContainer>
        <ModeButton>
          Random
          <br />
          matching
        </ModeButton>
        <ModeButton>
          make
          <br />
          new room
        </ModeButton>
        <ModeButton>Join</ModeButton>
      </ButtonContainer>
    </>
  );
};

export default Lobby;
