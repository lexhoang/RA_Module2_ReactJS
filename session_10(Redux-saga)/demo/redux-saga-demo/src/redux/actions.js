import * as actionTypes from '../constants/actionTypes';


export const act_getAll_user = () => {
    console.log("Step 1: vào action act_getAll_user");
    return {
        type: actionTypes.USER_GET
    }
}

export const act_post_user = (user) => {
    return {
        type: actionTypes.USER_POST,
        payload: user
    }
}

export const act_put_user = (user) => {
    return {
        type: actionTypes.USER_PUT,
        payload: user
    }
}

export const act_delete_user = (userId) => {
    return {
        type: actionTypes.USER_DELETE,
        payload: userId
    }
}

export const act_patch_user = (user) => {
    return {
        type: actionTypes.USER_PATCH,
        payload: user
    }
}

export const act_actions_success = (actionTypes, data) => {
    console.log("act_action_success, listUser ==>", data);
    return {
        type: actionTypes,
        payload: data
    }
}