import { get, post } from "./core";

import { Room } from "~types/model/Room";
import { User } from "~types/model/User";
import { PostRoomRequest } from "~types/request/PostRoomRequest";
import { SignRequest } from "~types/request/SignRequest";
import { SigninResponse } from "~types/response/SigninResponse";
import { headerUtil } from "~utils/Utils";

export const signin = (userInfo: SignRequest) => () => post<SigninResponse>("/auth/signin", userInfo);
export const signup = (userInfo: SignRequest) => post<User>("/auth/signup", userInfo);
export const getUserInfo = () => get<User>("/user", headerUtil.getAuthorization());
export const getRooms = (page: number) => get<Room[]>(`/room?page=${page}`, headerUtil.getAuthorization());
export const postRoom = (room: PostRoomRequest) => post<Room>("/room", room, headerUtil.getAuthorization());
