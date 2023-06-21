import { getAuthCredentials } from "@/apollo/auth-utils";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export default function useMe() {
  try {
    const cookie: any = Cookies.get("AUTH_CRED");
    const user = jwt.decode(cookie);
    return user;
  } catch (error) {
    console.log("error", error);
  }
}
