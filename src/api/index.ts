import { get, post } from "./core";

import { User } from "~types/model/User";
import { SignRequest } from "~types/request/SignRequest";
import { SigninResponse } from "~types/response/SigninResponse";
import { headerUtil } from "~utils/Utils";

export const signin = (userInfo: SignRequest) => () => post<SigninResponse>("/auth/signin", userInfo);
export const signup = (userInfo: SignRequest) => post<User>("/auth/signup", userInfo);
export const getUserInfo = () => get<User>("/user", headerUtil.getAuthorization());
