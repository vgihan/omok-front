import { Cookies } from "react-cookie";

import Header from "./Header";

import Cookie from "~utils/Cookie";
import User from "~utils/User";

const cookies = new Cookies();

export const cookieUtil = new Cookie(cookies);
export const headerUtil = new Header(cookieUtil);
export const userUtil = new User();
