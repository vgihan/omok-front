import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.opacityDarkGray};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-color: ${theme.colors.lightCharcoal};
  border-radius: 5vh;
  width: 600px;
  height: 70vh;
`;

const Modal: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Modal;
