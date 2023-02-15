import * as actionTypes from "../constant/actionTypes"


export const act_buy = (product, quantity) => {
    console.log(product);
    console.log(quantity);
    return {
        type: actionTypes.ACT_BUY,
        payload: { product, quantity }
    }
}

export const act_update = (productId, quantity) => {
    return {
        type: actionTypes.ACT_UPDATE,
        payload: { productId, quantity }
    }
}

export const act_delete = (productId, quantity) => {
    return {
        type: actionTypes.ACT_DELETE,
        payload: productId
    }
}

export const act_change_notify = (message) => {
    return {
        type: actionTypes.ACT_CHANGE_NOTIFY,
        payload: message
    }
}