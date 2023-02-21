import { instance } from "./axios";

/**
 *
 * @returns
 */
export const USER_GET = async () => {
    console.log("Step 3: userService thực hiện gọi api get của JSON SEVER");
    let response = await instance.get("users");

    console.log("Step 4: userService nhận kết quả từ api, listUser ==> ", response.data);
    return response.data;
}

/**
 *
 * @param {*} newUser: Dữ liệu user được thêm mới
 *@returns : Tạo một user mới
 */
export const USER_POST = async (newUser) => {
    await instance.post("users", newUser);
}

/**
 *
 * @param {*} updatedUser Dữ liệu user được sửa
 * @returns Update dữ liệu của user đã được sửa
 */
export const USER_PUT = async (updatedUser) => {
    await instance.put("users/" + updatedUser.id, updatedUser);
}

/**
 *
 * @param {*} updatedUser Dữ liệu user được sửa
 * @returns Update dữ liệu của user đã được sửa
 */
export const USER_PATCH = async (updatedUser) => {
    await instance.patch("users/" + updatedUser.id, updatedUser);
}

/**
 *
 * @param {*} id ID của user muốn xóa
 * @returns Xóa user được chọn theo ID
 */
export const USER_DELETE = async (id) => {
    await instance.post("users/" + id);
}