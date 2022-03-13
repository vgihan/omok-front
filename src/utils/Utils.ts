import { Cookies } from "react-cookie";

import Cookie from "~utils/Cookie";
import User from "~utils/User";

const cookies = new Cookies();

export const cookieUtil = new Cookie(cookies);
export const userUtil = new User();
