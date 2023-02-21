import { instance } from "./axios";

/**
 *
 * @returns
 */
export const USER_GET = async () => {
    let response = await instance.get("users");
    return response.data;
}

/**
 *
 * @param {*} newUser
 *
 */
export const USER_POST = async (newUser) => {
    await instance.post("users", newUser);
}

export const USER_PUT = async (updatedUser) => {
    await instance.put("users/" + updatedUser.id, updatedUser);
}

export const USER_PATCH = async (updatedUser) => {
    await instance.patch("users/" + updatedUser.id, updatedUser);
}

export const USER_DELETE = async (id) => {
    await instance.post("users/" + id);
}