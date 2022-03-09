import { ChangeEventHandler } from "react";

import styled from "@emotion/styled";

import CenterBox from "~components/atoms/CenterBox";
import theme from "~styles/theme";

const Container = styled.label`
  margin: 0 1vw;
  cursor: pointer;
`;

const InputCheck = styled.input`
  display: none;
`;

const FillBox = styled(CenterBox)`
  background-color: ${theme.colors.lightCharcoal};
  width: 35px;
  height: 35px;
  color: ${theme.colors.darkGray};
  font-size: 35px;
`;

type Props = {
  isChecked: boolean;
  onChange: ChangeEventHandler;
};

const Checkbox: React.FC<Props> = ({ isChecked, onChange }) => {
  return (
    <Container>
      <InputCheck type="checkbox" checked={isChecked} onChange={onChange} />
      <FillBox>{isChecked ? "✔" : ""}</FillBox>
    </Container>
  );
};

export default Checkbox;
