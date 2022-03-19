import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.opacityDarkGray};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightCharcoal};
  border-radius: 5vh;
  width: 600px;
  height: 70vh;
`;

interface Props {
  isOpened: boolean;
}

const Modal: React.FC<PropsWithChildren<Props>> = ({ children, isOpened }) => {
  return isOpened ? (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
