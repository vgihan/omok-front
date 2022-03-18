import { RoomMode } from "~types/model/Room";

export interface PostRoomRequest {
  name: string;
  password?: string;
  mode: RoomMode;
  isLock: boolean;
}
