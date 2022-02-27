import { ErrorResponse } from "./errorResponse";

export type SigninResponse = JwtToken | ErrorResponse;

export type JwtToken = {
  token: string;
};
