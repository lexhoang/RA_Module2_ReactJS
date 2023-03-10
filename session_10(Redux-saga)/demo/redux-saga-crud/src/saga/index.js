import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as userSaga from "./userSaga";

export const rootSaga = function* () {
    yield all([
        //takeLatest(actionType, function-saga )
        takeLatest(actionTypes.USER_GET, userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_SEARCH, userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_SORT, userSaga.USER_SAGA_GET),

        takeLatest(actionTypes.USER_POST, userSaga.USER_SAGA_POST),
        takeLatest(actionTypes.USER_PATCH, userSaga.USER_SAGA_PATCH),
        // takeLatest(actionTypes.USER_PUT, userSaga.USER_SAGA_PUT),
        takeLatest(actionTypes.USER_DELETE, userSaga.USER_SAGA_DELETE),
    ])
}