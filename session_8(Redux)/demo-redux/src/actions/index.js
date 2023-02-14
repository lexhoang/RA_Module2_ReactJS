import * as typesAction from '../constant/typesAction';

export const act_up = (value) => {
    return {
        type: typesAction.ACT_UP,
        payload: value
    }
}

export const act_down = (value) => {
    return {
        type: typesAction.ACT_DOWN,
        payload: value
    }
}

export const act_random = () => {
    return {
        type: typesAction.ACT_RANDOM,
    }
}