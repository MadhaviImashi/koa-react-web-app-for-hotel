import { postRequest } from "./util";

export const signup = (uri, data) => postRequest(uri, data);
export const login = (uri, data) => postRequest(uri, data);
