import * as userService from "../api/userService";
import { call, put } from 'redux-saga/effects';
import { act_user_success } from "../redux/actions";
import { USER_SUCCESS } from "../redux/constants/actionTypes";

//Các saga kết nối và làm việc service
export const USER_SAGA_GET = function* () {
    try {
        //call(functionName, argument of function)
        let listUser = yield call(userService.USER_GET_SERVICE);
        //success ==> gọi action ==> put(action)
        yield put(act_user_success(USER_SUCCESS, listUser));
    } catch (error) {
        console.log("error ==> ", error);
    }
}

export const USER_SAGA_POST = function* (action) {
    try {
        //Gọi sang service để thêm mới user
        yield call(userService.USER_POST_SERVICE, action.payload);
        //Thêm mới thành công ==> USER_SAGA_GET
        console.log("Thêm mới user thành công");
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error: ", error);
    }
}

export const USER_SAGA_PATCH = function* (action) {
    try {
        yield call(userService.USER_PATCH_SERVICE, action.payload);

        //Cập nhật thành công ==> USER_SAGA_GET
        console.log("Update user thành công");
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error: ", error);
    }
}

// export const USER_SAGA_PUT = function* (action) {
//     try {
//         yield call(userService.USER_PUT_SERVICE, action.payload);

//         //Cập nhật thành công ==> USER_SAGA_GET
//         console.log("Update user thành công");
//         yield USER_SAGA_GET();
//     } catch (error) {
//         console.log("error: ", error);
//     }
// }

export const USER_SAGA_DELETE = function* (action) {
    try {
        yield call(userService.USER_DELETE_SERVICE, action.payload);

        //Xóa thành công ==> USER_SAGA_GET
        console.log("Xóa user thành công");
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error: ", error);
    }
}