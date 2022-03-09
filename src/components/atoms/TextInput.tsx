import React from "react";

import styled from "@emotion/styled";

import { TextInputProps } from "~types/TextInputProps";

const Container = styled.input`
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 0px 0px 1vw;
`;

const TextInput: React.FC<TextInputProps> = ({ input, setInput, className, isPassword, onKeyUp }: TextInputProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value);

  return (
    <Container
      className={className}
      onChange={handleChange}
      value={input}
      type={isPassword ? "password" : "text"}
      onKeyUp={onKeyUp}
      spellCheck={false}
    />
  );
};

export default TextInput;
