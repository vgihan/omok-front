import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { TextInputProps } from "../../types/TextInputProps";
import TextInput from "../atoms/TextInput";
import TextRighteous from "../atoms/TextRighteous";

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