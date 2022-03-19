import React, { useState } from "react";

import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/button/ButtonRound";
import ButtonWrapper from "~components/atoms/button/ButtonWrapper";
import CenterBox from "~components/atoms/flexbox/CenterBox";
import TextRighteous from "~components/atoms/text/TextRighteous";
import SquareTextInput from "~components/atoms/textInput/SquareTextInput";
import LockCheckbox from "~components/molecules/LockCheckbox";
import useAllCheck from "~hooks/useAllCheck";
import { useMutateRoom } from "~queries/index";
import { RoomMode } from "~types/model/RoomElement";
import { PostRoomRequest } from "~types/request/PostRoomRequest";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr 0.5fr;
  grid-gap: 20px 30px;
  width: 100%;
  height: 100%;
  padding: 20px 40px 20px 40px;
  box-sizing: border-box;
`;

const TitleBox = styled(CenterBox)`
  display: block;
  text-align: center;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const SubmitButtonBox = styled(CenterBox)`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  column-gap: 10px;
  font-size: 20px;
`;

const MainTitle = styled(TextRighteous)`
  line-height: 3vw;
  font-size: 4vw;
`;

const SubTitle = styled(TextRighteous)`
  line-height: 2vw;
  font-size: 3.1vw;
`;

const ModeButton = styled(ButtonRound)<{ isSelected: boolean }>`
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.lightGray : theme.colors.opacityDarkGray)};
  border-radius: 2vmin;
  width: 100%;
  height: 100%;
  font-size: 50px;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const InputInfoBox = styled(CenterBox)`
  padding: 0 3vw 0 3vw;
  box-sizing: border-box;
  flex-direction: column;
  row-gap: 13%;
  background-color: ${({ theme }) => theme.colors.charcoal};
  border-radius: 2vmin;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  width: 100%;
  height: 100%;
`;

const ModalButton = styled(ButtonRound)`
  color: ${({ theme }) => theme.colors.cottonWhite};
  background-color: ${({ theme }) => theme.colors.charcoal};
  border-radius: 2vmin;
  width: 100px;
  height: 50px;
  :disabled {
    opacity: 50%;
  }
  :hover {
    opacity: 70%;
  }
`;

const ModalOff = styled(ButtonWrapper)``;

type Props = {
  offModal: () => void;
};

const ModalRoomMake: React.FC<Props> = ({ offModal }) => {
  const [roomInfo, setRoomInfo] = useState<PostRoomRequest>({
    isLock: false,
    mode: RoomMode.SOLO,
    name: "Omok 한 판?",
    password: "",
  });
  const isAllCheck = useAllCheck([roomInfo.mode, roomInfo.name]);

  const handleClickSoloButton = () => setRoomInfo((prevState) => ({ ...prevState, mode: RoomMode.SOLO }));
  const handleClickDoubleButton = () => setRoomInfo((prevState) => ({ ...prevState, mode: RoomMode.DUO }));

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomInfo((prevState) => ({ ...prevState, name: e.currentTarget.value }));
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomInfo((prevState) => ({ ...prevState, password: e.currentTarget.value }));
  };
  const handleChangeLockCheckbox = () => {
    setRoomInfo((prevState) => ({ ...prevState, isLock: !prevState.isLock }));
  };

  const { mutate: createRoom } = useMutateRoom();

  return (
    <Container>
      <TitleBox>
        <MainTitle>M A K E</MainTitle>
        <SubTitle>new room</SubTitle>
      </TitleBox>
      <CenterBox>
        <ModeButton onClick={handleClickSoloButton} isSelected={roomInfo.mode === RoomMode.SOLO}>
          Solo
        </ModeButton>
      </CenterBox>
      <CenterBox>
        <ModeButton onClick={handleClickDoubleButton} isSelected={roomInfo.mode === RoomMode.DUO}>
          Duo
        </ModeButton>
      </CenterBox>
      <InputInfoBox>
        <SquareTextInput value={roomInfo.name} onChange={handleChangeName}>
          Room
          <br />
          name
        </SquareTextInput>
        <SquareTextInput
          type="password"
          value={roomInfo.password}
          onChange={handleChangePassword}
          disabled={!roomInfo.isLock}
        >
          pw
        </SquareTextInput>
        <LockCheckbox isChecked={roomInfo.isLock} onClick={handleChangeLockCheckbox} />
      </InputInfoBox>
      <SubmitButtonBox>
        <ModalOff offModal={offModal}>
          <ModalButton onClick={() => createRoom(roomInfo)} disabled={!isAllCheck}>
            OK
          </ModalButton>
        </ModalOff>
        <ModalOff offModal={offModal}>
          <ModalButton>NO</ModalButton>
        </ModalOff>
      </SubmitButtonBox>
    </Container>
  );
};

export default ModalRoomMake;
