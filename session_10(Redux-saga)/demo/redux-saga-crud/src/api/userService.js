import { instances } from "./axios";


//Xây dựng các service để gọi API - xử lý bất đồng bộ
export const USER_GET_SERVICE = async () => {
    //Gọi và đợi kết quả trả về --> http://localhost:8000/users
    let response = await instances.get("users");
    return response.data
}