import { Cookies } from "react-cookie";

export default class Cookie {
  constructor(private cookies: Cookies) {}

  setCookie(key: string, value: string, option?: any) {
    return this.cookies.set(key, value, { ...option });
  }
  getCookie(key: string) {
    return this.cookies.get(key);
  }
}
