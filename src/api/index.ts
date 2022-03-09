import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import { ErrorResponse } from "~types/errorResponse";
import { SigninResponse } from "~types/signinResponse";

export const useSignin = (
  data: { id: string; password: string },
  options?: Omit<
    UseQueryOptions<AxiosResponse<SigninResponse>, AxiosError<ErrorResponse>, QueryKey, "signin">,
    "queryKey"
  >,
) => {
  return useQuery("signin", () => axios.post("http://localhost:5000/auth/signin", data), options);
};
