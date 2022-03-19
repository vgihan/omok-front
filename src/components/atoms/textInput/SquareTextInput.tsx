import styled from "@emotion/styled";

import LabelTextInput from "~components/molecules/LabelTextInput";

const ModalTextInput = styled(LabelTextInput)`
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.darkGray : theme.colors.lightCharcoal)};
  width: 40vmin;
  height: 5vh;
  border-radius: 0%;
`;

export default ModalTextInput;
