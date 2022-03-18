import { Cookies } from "react-cookie";

export default class Cookie {
  // eslint-disable-next-line no-unused-vars
  constructor(private cookies: Cookies) {}

  set(key: string, value: string, option?: any) {
    return this.cookies.set(key, value, { ...option });
  }
  get(key: string) {
    return this.cookies.get(key);
  }
  remove(key: string) {
    this.cookies.remove(key);
  }
  checkLogin() {
    return !!this.get("token");
  }
}
