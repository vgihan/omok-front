import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "react-query";

import { getRooms, getUserInfo, postRoom, signin, signup } from "~api/index";
import { Room } from "~types/model/Room";
import { User } from "~types/model/User";
import { PostRoomRequest } from "~types/request/PostRoomRequest";
import { SignRequest } from "~types/request/SignRequest";
import { ErrorResponse } from "~types/response/ErrorResponse";
import { SigninResponse } from "~types/response/SigninResponse";
import { SignupResponse } from "~types/response/SignupResponse";

export const useFetchSignin = (
  data: { id: string; password: string },
  options?: UseQueryOptions<SigninResponse, ErrorResponse, SigninResponse, "signin">,
) => {
  return useQuery("signin", signin(data), { ...options, retry: 0 });
};

export const useFetchSignup = (options?: UseMutationOptions<SignupResponse, unknown, SignRequest, unknown>) => {
  return useMutation(signup, { ...options, retry: 0 });
};

export const useFetchUserInfo = (options?: UseQueryOptions<User, ErrorResponse, User, "userInfo">) => {
  return useQuery("userInfo", getUserInfo, { ...options, retry: 0 });
};

export const useFetchRooms = (
  page: number,
  options?: UseQueryOptions<Room[], ErrorResponse, Room[], ["rooms", number]>,
) => {
  return useQuery(["rooms", page], () => getRooms(page), { ...options, retry: 0 });
};

export const useMutateRoom = (options?: UseMutationOptions<Room, unknown, PostRoomRequest, unknown>) => {
  return useMutation(postRoom, { ...options, retry: 0 });
};
