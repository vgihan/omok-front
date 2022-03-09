import styled from "@emotion/styled";

import CenterBox from "~components/atoms/CenterBox";
import TextRighteous from "~components/atoms/TextRighteous";
import TextRoboto from "~components/atoms/TextRoboto";
import { Room } from "~types/room";

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;
  justify-content: center;
  border-radius: 1vmin;
  background-color: ${({ theme }) => theme.colors.opacityCottonWhite};
  width: 27vw;
  height: 15vh;
  padding: 1vh 1.5vw 1vh 1.5vw;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const RoomInfoContainer = styled.div<{ isLock: boolean }>`
  display: flex;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  border-radius: 1vmin;
  background-color: ${({ theme }) => theme.colors.charcoal};
  background-repeat: no-repeat;
  background-position: 96%;
  background-size: 8%;
  ${({ isLock }) => (isLock ? 'background-image: url("img/lock.svg")' : "")};
`;

const Mode = styled(TextRoboto)`
  display: flex;
  align-items: end;
  height: 100%;
  font-size: 2vmin;
`;

const RoomState = styled(TextRighteous)`
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 3vmin;
  width: 100%;
  height: 100%;
  color: ${({ children }) => (children === "WAITING" ? "white" : "black")};
`;

const IdBox = styled(CenterBox)`
  font-family: roboto;
  font-weight: bold;
  font-size: 2vmin;
  border-radius: 1vmin;
  width: 17%;
  height: 100%;
  margin: 0 2vw 0 0;
  background-color: ${({ theme }) => theme.colors.opacityDarkGray};
`;

const NameBox = styled(CenterBox)`
  font-family: roboto;
  font-weight: bold;
  height: 100%;
`;

const LobbyRoomUnit: React.FC<Room> = ({ id, name, mode, isLock, state }: Room) => {
  return (
    <Container>
      <RoomInfoContainer isLock={isLock}>
        <IdBox>{id}</IdBox>
        <NameBox>{name}</NameBox>
      </RoomInfoContainer>
      <div>
        <Mode>{mode}</Mode>
      </div>
      <div>
        <RoomState>{state}</RoomState>
      </div>
    </Container>
  );
};

export default LobbyRoomUnit;
