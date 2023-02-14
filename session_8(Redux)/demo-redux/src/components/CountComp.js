import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as typesActions from '../constant/typesAction';
import * as actions from '../actions';

export default function CountComp() {
    const count = useSelector(state => state.countReducer);
    const dispatch = useDispatch();

    const handleUpCount = () => {
        dispatch(actions.act_up(5))
    }

    // const handleUpCount = () => {
    //     dispatch({
    //         type: typesActions.ACT_UP,
    //         payload: 5
    //     })
    // }

    const handleDownCount = () => {
        dispatch({
            type: typesActions.ACT_DOWN,
            payload: 5
        })
    }



    return (
        <div>
            <h2>Redux Count</h2>
            <p>Number: {count} </p>
            <button onClick={() => handleUpCount()}>Up Count</button>
            <button onClick={() => handleDownCount()}>Down Count</button>
        </div>
    )
}
