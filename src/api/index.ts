import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import { AUTH_SIGN_IN, USER_URI } from "src/constants/uri";
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
    () => axios.post(AUTH_SIGN_IN, data),
    options,
  );
};

export const useFetchUserInfo = (
  options?: UseQueryOptions<AxiosResponse<User>, Error, AxiosResponse<User>, QueryKey>,
) => {
  return useQuery<AxiosResponse<User>, Error>(
    "userInfo",
    () => axios.get(USER_URI, { headers: { ...getAuthorization() } }),
    options,
  );
};
