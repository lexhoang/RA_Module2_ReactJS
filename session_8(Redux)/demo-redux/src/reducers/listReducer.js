import { ACT_RANDOM } from '../constant/typesAction';

const initialState = [1, 5, 8];

const listReduce = (state = initialState, action) => {
    switch (action.type) {
        case ACT_RANDOM:
            state = [...state, parseInt(Math.random() * 10)];
            return state
        default:
            return state
    }
}
export default listReduce;