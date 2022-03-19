import { MouseEventHandler } from "react";

import styled from "@emotion/styled";

import Checkbox from "../Checkbox";

const Container = styled.div`
  display: flex;
  column-gap: 1vw;
`;

interface Props {
  isChecked: boolean;
  onClick: MouseEventHandler;
}

const LockCheckbox: React.FC<Props> = ({ isChecked, onClick }) => {
  return (
    <Container>
      <img src="img/lock.svg" width="35px" height="35px" alt="lock" />
      <Checkbox isChecked={isChecked} onClick={onClick}></Checkbox>
    </Container>
  );
};

export default LockCheckbox;
