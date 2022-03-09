import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/TextRighteous";
import LobbyButtonWrapper from "~components/organisms/LobbyButtonWrapper";
import LobbyRoomList from "~components/organisms/LobbyRoomList";
import Topbar from "~components/organisms/Topbar";
import theme from "~styles/theme";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 22fr 10fr;
  grid-template-rows: 10fr 30fr;
  grid-column-gap: 7vmin;
  justify-content: center;
  position: absolute;
  top: 11vh;
  bottom: 0;
  width: 100%;
  padding: 0 7vmin 7vmin 7vmin;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  text-align: center;
`;

const Title = styled(TextRighteous)`
  font-size: 12vh;
  color: ${theme.colors.gray};
`;

const SubTitle = styled(TextRighteous)`
  font-size: 4vh;
  color: ${theme.colors.gray};
`;

const RoomSpace = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.opacityDarkGray};
  padding: 3.5vmin 3.5vmin 1vmin 3.5vmin;
`;

const Lobby: React.FC = () => {
  return (
    <>
      <Topbar />
      <GridContainer>
        <TitleBox>
          <Title>Play</Title>
          <SubTitle>O-MOK</SubTitle>
        </TitleBox>
        <RoomSpace>
          <LobbyRoomList />
        </RoomSpace>
        <div>
          <LobbyButtonWrapper />
        </div>
      </GridContainer>
    </>
  );
};

export default Lobby;
