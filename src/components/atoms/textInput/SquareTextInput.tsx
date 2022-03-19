import styled from "@emotion/styled";

import LabelTextInput from "~components/molecules/LabelTextInput";

const SquareTextInput = styled(LabelTextInput)`
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.darkGray : theme.colors.lightCharcoal)};
  height: 5vh;
  border-radius: 0%;
`;

export default SquareTextInput;
