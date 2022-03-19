import styled from "@emotion/styled";

import CenterBox from "~components/atoms/flexbox/CenterBox";

interface Props {
  isChecked: boolean;
}

const Checkbox = styled(CenterBox)<Props>`
  background-color: ${({ theme }) => theme.colors.lightCharcoal};
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 35px;
  cursor: pointer;
  :after {
    content: "${({ isChecked }) => (isChecked ? "✔" : "")}";
  }
`;

export default Checkbox;
