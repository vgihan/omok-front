import { ErrorResponse } from "~types/response/ErrorResponse";

type HeadersInit = string[][] | Record<string, string> | Headers;

// eslint-disable-next-line no-undef
const fetchData = async <T>(input: Request | string, init?: RequestInit) => {
  const response = await fetch(input, init);
  const data = (await response.json()) as ErrorResponse & T;
  return response.ok ? data : Promise.reject(data);
};

export const post = async <T>(path: string, body: any, header?: HeadersInit) =>
  await fetchData<T>(path, {
    method: "POST",
    headers: {
      ...header,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
export const get = async <T>(path: string, header?: HeadersInit) =>
  await fetchData<T>(path, {
    method: "GET",
    headers: {
      ...header,
      "Content-Type": "application/json",
    },
  });
export const put = async <T>(path: string, body: any, header?: HeadersInit) =>
  await fetchData<T>(path, {
    method: "PUT",
    headers: {
      ...header,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
export const del = async <T>(path: string, header?: HeadersInit) =>
  await fetchData<T>(path, {
    method: "DELETE",
    headers: {
      ...header,
      "Content-Type": "application/json",
    },
  });
