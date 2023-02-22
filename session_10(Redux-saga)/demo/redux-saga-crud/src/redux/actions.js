import * as actionTypes from './constants/actionTypes';
// Tạo action để yêu cầu lấy dữ liệu từ JSON-Server
//function =(data)=>{return object(type.payload)}
export const act_get_user = () => {
    console.log("Từ ListUser component gọi act_get_user");
    return {
        type: actionTypes.USER_GET,
    }
}