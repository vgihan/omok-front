import { MouseEventHandler } from "react";

import styled from "@emotion/styled";

import CenterBox from "~components/atoms/CenterBox";

const FillBox = styled(CenterBox)`
  background-color: ${({ theme }) => theme.colors.lightCharcoal};
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 35px;
  cursor: pointer;
`;

interface Props {
  isChecked: boolean;
  onClick: MouseEventHandler;
}

const Checkbox: React.FC<Props> = ({ isChecked, onClick }) => {
  return <FillBox onClick={onClick}>{isChecked ? "✔" : ""}</FillBox>;
};

export default Checkbox;
