import { Cookies } from "react-cookie";

import Cookie from "~utils/Cookie";
import Handler from "~utils/Handler";
import Header from "~utils/Header";
import User from "~utils/User";

const cookies = new Cookies();

export const cookieUtil = new Cookie(cookies);
export const headerUtil = new Header(cookieUtil);
export const userUtil = new User();
export const handlerUtil = new Handler();
