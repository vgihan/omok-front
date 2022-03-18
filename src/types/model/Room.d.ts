import { RoomMode, RoomState } from "./RoomElement";

export type Room = {
  id: string;
  name: string;
  password?: string;
  mode: RoomMode;
  isLock: boolean;
  state: RoomState;
  countPlayer: number;
};
