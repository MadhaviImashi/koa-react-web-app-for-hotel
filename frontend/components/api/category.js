import { getByIDRequest, getRequest, postRequest } from "./util";

export const getAllCategories = (uri) => getRequest(uri);

export const getCategoryById = (uri, id) => getByIDRequest(uri, id);

export const addCategory = (uri, data) => postRequest(uri, data);
