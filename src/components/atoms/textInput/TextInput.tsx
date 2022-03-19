import React from "react";

import styled from "@emotion/styled";

const Container = styled.input`
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 0px 0px 0px 2vw;
`;

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props: React.InputHTMLAttributes<HTMLInputElement>,
) => {
  return <Container type={props.type || "text"} spellCheck={false} {...props} />;
};

export default TextInput;
