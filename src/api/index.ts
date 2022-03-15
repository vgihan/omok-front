import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import { ErrorResponse } from "~types/errorResponse";
import { SigninResponse } from "~types/signinResponse";
import { User } from "~types/user";
import { cookieUtil } from "~utils/Utils";

const getAuthorization = () => ({
  Authorization: `Bearer ${cookieUtil.getCookie("token")}`,
});

export const useFetchSignin = (
  data: { id: string; password: string },
  options?: Omit<
    UseQueryOptions<AxiosResponse<SigninResponse>, AxiosError<ErrorResponse>, AxiosResponse<SigninResponse>, QueryKey>,
    "queryKey"
  >,
) => {
  return useQuery<AxiosResponse<SigninResponse>, AxiosError<ErrorResponse>>(
    "signin",
    () => axios.post("/auth/signin", data),
    options,
  );
};

export const useFetchSignup = (
  data: { id: string; password: string },
  options?: Omit<
    UseQueryOptions<AxiosResponse<SigninResponse>, AxiosError<ErrorResponse>, AxiosResponse<SigninResponse>, QueryKey>,
    "queryKey"
  >,
) => {
  return useQuery<AxiosResponse<SigninResponse>, AxiosError<ErrorResponse>>(
    "signup",
    () => axios.post("/auth/signup", data),
    options,
  );
};

export const useFetchUserInfo = (
  options?: UseQueryOptions<AxiosResponse<User>, Error, AxiosResponse<User>, QueryKey>,
) => {
  return useQuery<AxiosResponse<User>, Error>(
    "userInfo",
    () => axios.get("/user", { headers: { ...getAuthorization() } }),
    options,
  );
};
