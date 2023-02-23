import { instances } from "./axios";


//Xây dựng các service để gọi API - xử lý bất đồng bộ
export const USER_GET_SERVICE = async () => {
    //Gọi và đợi kết quả trả về --> http://localhost:8000/users
    let response = await instances.get("users");
    // Trả về danh sách user lấy được từ api
    return response.data
}

export const USER_SEARCH_SERVICE = async (searchData) => {
    let response = await instances.get(`users?fullname_like=${searchData}`);
    return response.data;
}

export const USER_SORT_SERVICE = async ({ sortData, orderData }) => {
    // let { sortData, orderData } = payload
    let response = await instances.get(`users?_sort=${sortData}&_order=${orderData}`);
    return response.data;
}

export const USER_POST_SERVICE = async (newUser) => {
    await instances.post("users", newUser)
}

export const USER_PATCH_SERVICE = async (updatedUser) => {
    await instances.patch(`users/${updatedUser.id}`, updatedUser);
}

// export const USER_PUT_SERVICE = async (updatedUser) => {
//     await instances.put(`users/${updatedUser.id}`, updatedUser);
// }

export const USER_DELETE_SERVICE = async (deleteId) => {
    await instances.delete(`users/${deleteId}`);
}