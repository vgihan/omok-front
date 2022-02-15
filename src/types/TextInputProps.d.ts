import { Dispatch, KeyboardEventHandler, SetStateAction } from "react";

export interface TextInputProps {
  setInput: Dispatch<SetStateAction<string>>;
  input: string;
  className?: string;
  isPassword?: boolean;
  onKeyUp?: KeyboardEventHandler;
}
