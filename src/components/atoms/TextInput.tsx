import React from "react";

import styled from "@emotion/styled";

const Container = styled.input`
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 0px 0px 1vw;
`;

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props: React.InputHTMLAttributes<HTMLInputElement>,
) => {
  return <Container type={props.type || "text"} {...props} />;
};

export default TextInput;
