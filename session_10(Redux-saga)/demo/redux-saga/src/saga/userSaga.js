import { call, put } from 'redux-saga/effects';
import * as userService from '../api/userService';
import { act_actions_success } from '../redux/actions';
import { USER_SUCCESS } from '../constants/actionTypes';


export function* getAllUsers() {
    try {
        console.log("Step 2: userSage nhận action act_getAll_user");
        // goi axios USER_GET, nhận kết quả trả về
        let listUsers = yield call(userService.USER_GET);

        console.log("Step 5: userSaga nhận kết quả từ userService, listUser ==> ", listUsers);
        //Success ==> Chuyển listStudent sang reducer
        yield put(act_actions_success(USER_SUCCESS, listUsers))
    } catch (error) {
        //error
        console.log(error);
    }

}