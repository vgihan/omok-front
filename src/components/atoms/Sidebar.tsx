import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Container = styled.div<Props>`
  background-color: ${theme.colors.cottonWhite};
  border-radius: 30px;
  width: 380px;
  height: 100%;
  left: ${({ isActive }) => (isActive ? "0" : "-100%")};
  position: absolute;
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.3);
  animation: 0.7s ${({ isActive }) => (isActive ? "showUp" : "showOut")};

  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }
`;

type Props = {
  isActive: boolean;
};

const Sidebar: React.FC<Props> = ({ isActive }: Props) => {
  return <Container isActive={isActive} />;
};

export default Sidebar;
