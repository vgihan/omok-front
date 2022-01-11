import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction } from "react";

const Container = styled.input`
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 0px 0px 1vw;
`;

type Props = {
  setInput: Dispatch<SetStateAction<string>>;
  input: string;
  className?: string;
  isPassword?: boolean;
};

const TextInput: React.FC<Props> = ({
  input,
  setInput,
  className,
  isPassword,
}: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);

  return (
    <Container
      className={className}
      onChange={handleChange}
      value={input}
      type={isPassword ? "password" : "text"}
    />
  );
};

export default TextInput;