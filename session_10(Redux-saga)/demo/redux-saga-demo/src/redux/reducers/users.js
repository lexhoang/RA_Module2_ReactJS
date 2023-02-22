import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
}
export default users;