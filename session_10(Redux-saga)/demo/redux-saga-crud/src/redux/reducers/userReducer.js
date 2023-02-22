import { USER_GET, USER_SUCCESS } from "../constants/actionTypes";

const initialState = [];

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET:
            return state

        case USER_SUCCESS:
            //Xử lý cho trường hợp gọi api get thành công
            //data cần lưu trữ ở store của redux: action.payload
            state = [...action.payload];
            return state
        default:
            return state;
    }
}