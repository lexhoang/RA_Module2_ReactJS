import * as typesAction from '../constant/typesAction';

const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAction.ACT_UP:
            state += action.payload
            return state;

        case typesAction.ACT_DOWN:
            state -= action.payload
            return state;

        default:
            return state;
    }
}
export default countReducer