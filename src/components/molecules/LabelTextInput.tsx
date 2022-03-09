import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

import TextInput from "~components/atoms/TextInput";
import TextRighteous from "~components/atoms/TextRighteous";
import { TextInputProps } from "~types/TextInputProps";

const Container = styled.div<{ fontSize: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3vw;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

interface Props extends TextInputProps {
  fontSize: number;
}

const LabelTextInput: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <Container fontSize={props.fontSize}>
      <TextRighteous>{props.children}</TextRighteous>
      <TextInput {...props} />
    </Container>
  );
};

export default LabelTextInput;
