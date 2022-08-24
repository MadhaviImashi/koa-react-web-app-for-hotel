import { getByIDRequest, getRequest, postRequest } from "./util";

export const getAllRooms = (uri) => getRequest(uri);

export const getRoomById = (uri, id) => getByIDRequest(uri, id);

export const addRoom = (uri, data) => postRequest(uri, data);
