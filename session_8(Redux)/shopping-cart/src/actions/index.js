import * as actionTypes from '../constant/actionTypes';

export const act_buy = (product, quantity) => {
    return {
        type: actionTypes.ACT_BUY,
        payload: { product, quantity }
    }
}

export const act_update = (product, quantity) => {
    return {
        type: actionTypes.ACT_UPDATE,
        payload: { product, quantity }
    }
}

export const act_delete = (productId) => {
    return {
        type: actionTypes.ACT_DELETE,
        payload: productId
    }
}