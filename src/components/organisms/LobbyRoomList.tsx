import { useState } from "react";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import LobbyRoomUnit from "./LobbyRoomUnit";

import CenterBox from "~components/atoms/CenterBox";
import Spinner from "~components/atoms/Spinner";
import { useFetchRooms } from "~queries/index";
import { ErrorResponse } from "~types/response/ErrorResponse";

const Container = styled.div`
  display: grid;
  grid-template-rows: 45vh 10vh;
  grid-gap: 1vmin 1vmin;
  width: 100%;
`;

const RoomUnitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1vmin 1vmin;
  box-sizing: border-box;
  align-items: center;
`;

const ButtonContainer = styled(CenterBox)`
  column-gap: 1vmin;
  width: 100%;
`;

const ButtonWrapper = styled(CenterBox)`
  width: 30px;
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
  const [curPage, setCurPage] = useState(1);
  const navigate = useNavigate();

  const { data: rooms } = useFetchRooms(curPage, {
    onError: (error: ErrorResponse) => {
      if (error.statusCode === 401) {
        alert("로그인 유효기간이 지났습니다. 다시 로그인 해주세요.");
        navigate("/");
      }
    },
  });

  if (!rooms) return <Spinner />;

  return (
    <Container>
      <RoomUnitContainer>
        {rooms.map((room) => (
          <LobbyRoomUnit {...room} key={room.id} />
        ))}
      </RoomUnitContainer>
      <ButtonContainer>
        <ButtonWrapper>
          {curPage <= 1 ? "" : <PrevPageButton onClick={() => setCurPage((prevPage) => Math.max(1, prevPage - 1))} />}
        </ButtonWrapper>
        <ButtonWrapper>
          {rooms.length < 6 ? "" : <NextPageButton onClick={() => setCurPage((prevPage) => prevPage + 1)} />}
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default LobbyRoomList;
