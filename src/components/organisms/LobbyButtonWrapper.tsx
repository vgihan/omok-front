import { useState } from "react";

import styled from "@emotion/styled";

import ButtonRound from "~components/atoms/ButtonRound";
import Modal from "~components/atoms/Modal";
import Portal from "~components/atoms/Portal";
import ModalRoomMake from "~components/organisms/ModalRoomMake";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
  width: 100%;
  height: 100%;
`;

const ModeButton = styled(ButtonRound)`
  background-color: ${({ theme }) => theme.colors.opacityCottonWhite};
  color: ${({ theme }) => theme.colors.darkGray};
  height: 35%;
  font-size: 7vmin;
  border-radius: 1vmin;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const SearchBox = styled.input`
  background-color: ${({ theme }) => theme.colors.opacityCottonWhite};
  color: ${({ theme }) => theme.colors.darkGray};
  height: 10%;
  font-size: 2vmin;
  border-radius: 1vmin;
  margin-bottom: 10%;
  background-image: url("img/search.svg");
  background-size: 8%;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 2%;
  padding: 0 0 0 13%;
  outline: none;
`;

const LobbyButtonWrapper: React.FC = () => {
  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);

  const offModal = () => setIsOpenedModal(false);
  const openModal = () => setIsOpenedModal(true);

  return (
    <Container>
      <Portal>
        <Modal isOpened={isOpenedModal}>
          <ModalRoomMake offModal={offModal} />
        </Modal>
      </Portal>
      <SearchBox placeholder="Search" />
      <ModeButton>Rank mode</ModeButton>
      <ModeButton onClick={openModal}>new room</ModeButton>
    </Container>
  );
};

export default LobbyButtonWrapper;
