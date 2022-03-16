import styled from "@emotion/styled";

import LobbyRoomUnit from "./LobbyRoomUnit";

import CenterBox from "~components/atoms/CenterBox";
import { Room } from "~types/model/Room";

const Container = styled.div`
  display: grid;
  grid-template-columns: 27vw 27vw;
  grid-template-rows: 15vh 15vh 15vh 10vh;
  grid-gap: 1vmin 1vmin;
`;

const ButtonContainer = styled(CenterBox)`
  grid-column: 1/3;
  column-gap: 1vmin;
  width: 100%;
`;

const PageButton = styled.button`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  background-color: transparent;
  cursor: pointer;
`;

const PrevPageButton = styled(PageButton)`
  border-right: 30px solid ${({ theme }) => theme.colors.opacityCottonWhite};
  :hover {
    border-right: 30px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const NextPageButton = styled(PageButton)`
  border-left: 30px solid ${({ theme }) => theme.colors.opacityCottonWhite};
  :hover {
    border-left: 30px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const LobbyRoomList: React.FC = () => {
  const rooms: Room[] = [
    {
      id: "01",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
    {
      id: "02",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
    {
      id: "03",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
    {
      id: "04",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
    {
      id: "05",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
    {
      id: "06",
      isLock: true,
      mode: "1 vs 1",
      name: "Room Name",
      state: "WAITING",
    },
  ];
  return (
    <Container>
      {rooms.map((room) => (
        <LobbyRoomUnit {...room} key={room.id} />
      ))}
      <ButtonContainer>
        <PrevPageButton />
        <NextPageButton />
      </ButtonContainer>
    </Container>
  );
};

export default LobbyRoomList;
