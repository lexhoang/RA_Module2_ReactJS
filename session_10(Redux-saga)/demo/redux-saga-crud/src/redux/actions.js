import * as actionTypes from './constants/actionTypes';

// Tạo action để yêu cầu lấy dữ liệu từ JSON-Server
//function =(data)=>{return object(type.payload)}
export const act_get_user = () => {
    console.log("Từ ListUser component gọi act_get_user");
    return {
        type: actionTypes.USER_GET,
    }
}

export const act_user_search = (searchData) => {
    return {
        type: actionTypes.USER_SEARCH,
        payload: searchData
    }
}

export const act_user_sort = (sortData, orderData) => {
    return {
        type: actionTypes.USER_SORT,
        payload: { sortData, orderData }
    }
}

export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}

export const act_create_user = (newUser) => {
    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }

}

export const act_update_user = (updatedUser) => {
    return {
        type: actionTypes.USER_PATCH,
        payload: updatedUser
    }
}
// export const act_update_user = (updatedUser) => {
//     return {
//         type: actionTypes.USER_PUT,
//         payload: updatedUser
//     }
// }

export const act_delete_user = (deleteId) => {
    return {
        type: actionTypes.USER_DELETE,
        payload: deleteId
    }
}