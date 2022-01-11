import styled from "@emotion/styled";
import theme from "../../styles/theme";

const ButtonColorless = styled.button`
  font-family: ${theme.fonts.righteous};
  font-size: 50px;
  background-color: transparent;
  border: none;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default ButtonColorless;
