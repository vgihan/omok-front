import { KeyboardEvent } from "react";

export default class Handler {
  enterKeyup(...handlers: Function[]) {
    return (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      handlers.forEach((handler) => handler());
    };
  }
}
