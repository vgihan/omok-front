import styled from "@emotion/styled";
import React, { useState } from "react";
import { Room } from "~types/room";
import useAllCheck from "~hooks/useAllCheck";
import theme from "~styles/theme";
import ButtonRound from "~components/atoms/ButtonRound";
import CenterBox from "~components/atoms/CenterBox";
import TextInput from "~components/atoms/TextInput";
import TextRighteous from "~components/atoms/TextRighteous";
import TextRoboto from "~components/atoms/TextRoboto";
import Checkbox from "~components/atoms/Checkbox";

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
  color: ${theme.colors.lightGray};
`;

const InputInfoBox = styled(CenterBox)`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
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
  color: ${theme.colors.darkGray};
  background-color: ${({ isSelected }) =>
    isSelected ? `${theme.colors.lightGray}` : `${theme.colors.charcoal}`};
  border-radius: 2vmin;
  width: 100%;
  height: 100%;
  font-size: 50px;
  :hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const InputInfoSpace = styled(CenterBox)`
  flex-direction: column;
  row-gap: 13%;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.charcoal};
  border-radius: 2vmin;
`;

const TextInfoWrapper = styled(CenterBox)`
  flex-direction: column;
  justify-content: space-between;
  height: 47%;
`;

const TextInputLine = styled(TextRoboto)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TextInfoInput = styled(TextInput)`
  background-color: ${theme.colors.lightCharcoal};
  width: 40vmin;
  height: 5vh;
  border-radius: 0%;
`;

const TextInputLabel = styled.span`
  width: 60px;
  text-align: center;
`;

const ModalButton = styled(ButtonRound)`
  color: ${theme.colors.cottonWhite};
  background-color: ${theme.colors.charcoal};
  border-radius: 2vmin;
  width: 100px;
  height: 50px;
  :disabled {
    opacity: 50%;
  }
`;

type Props = {
  handleOffModal: () => void;
};

const ModalRoomMake: React.FC<Props> = ({ handleOffModal }) => {
  const [roomInfo, setRoomInfo] = useState<Room>({
    id: "",
    isLock: false,
    mode: "",
    name: "",
    pw: "",
    state: "WAITING",
  });
  const isAllCheck = useAllCheck([roomInfo.mode, roomInfo.name]);

  const setAnyRoomInfo = (nextState: {}) =>
    setRoomInfo((prevState) => ({ ...prevState, ...nextState }));

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnyRoomInfo({ isLock: e.target.checked });
  };

  return (
    <Container>
      <TitleBox>
        <MainTitle>M A K E</MainTitle>
        <SubTitle>new room</SubTitle>
      </TitleBox>
      <CenterBox>
        <ModeButton
          onClick={() => setAnyRoomInfo({ mode: "Solo" })}
          isSelected={roomInfo.mode === "Solo"}
        >
          Solo
        </ModeButton>
      </CenterBox>
      <CenterBox>
        <ModeButton
          onClick={() => setAnyRoomInfo({ mode: "Double" })}
          isSelected={roomInfo.mode === "Double"}
        >
          Double
        </ModeButton>
      </CenterBox>
      <InputInfoBox>
        <InputInfoSpace>
          <TextInfoWrapper>
            <TextInputLine>
              <TextInputLabel>
                Room
                <br />
                name
              </TextInputLabel>
              <TextInfoInput
                input={roomInfo.name}
                setInput={(v) => setAnyRoomInfo({ name: v })}
              />
            </TextInputLine>
            <TextInputLine>
              <TextInputLabel>pw</TextInputLabel>
              <TextInfoInput
                input={roomInfo.pw as string}
                setInput={(v) => setAnyRoomInfo({ pw: v, isLock: v && true })}
                isPassword={true}
              />
            </TextInputLine>
          </TextInfoWrapper>
          <CenterBox>
            <img src="img/lock.svg" width="35px" height="35px" alt="lock" />
            <Checkbox
              isChecked={roomInfo.isLock}
              onChange={handleChangeCheckbox}
            />
          </CenterBox>
        </InputInfoSpace>
      </InputInfoBox>
      <SubmitButtonBox>
        <ModalButton disabled={!isAllCheck}>OK</ModalButton>
        <ModalButton onClick={handleOffModal}>NO</ModalButton>
      </SubmitButtonBox>
    </Container>
  );
};

export default ModalRoomMake;
