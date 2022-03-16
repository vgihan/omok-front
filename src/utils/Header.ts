import Cookie from "./Cookie";

export default class Header {
  // eslint-disable-next-line no-unused-vars
  constructor(private cookieUtil: Cookie) {}

  getAuthorization() {
    return {
      Authorization: `Bearer ${this.cookieUtil.getCookie("token")}`,
    };
  }
}
