import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

import TextRighteous from "~components/atoms/text/TextRighteous";
import TextInput from "~components/atoms/textInput/TextInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3vw;
  width: 100%;
`;

const LabelTextInput: React.FC<PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>> = ({
  children,
  ...rest
}: PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) => {
  return (
    <Container className="label-text">
      <TextRighteous>{children}</TextRighteous>
      <TextInput {...rest} />
    </Container>
  );
};

export default LabelTextInput;
