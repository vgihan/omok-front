import { Cookies } from "react-cookie";

export default class Cookie {
  // eslint-disable-next-line no-unused-vars
  constructor(private cookies: Cookies) {}

  setCookie(key: string, value: string, option?: any) {
    return this.cookies.set(key, value, { ...option });
  }
  getCookie(key: string) {
    return this.cookies.get(key);
  }
  checkLogin() {
    return !!this.getCookie("token");
  }
}
