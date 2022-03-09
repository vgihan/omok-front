import { ErrorResponse } from "~types/errorResponse";

export type SigninResponse = JwtToken | ErrorResponse;

export type JwtToken = {
  token: string;
};
