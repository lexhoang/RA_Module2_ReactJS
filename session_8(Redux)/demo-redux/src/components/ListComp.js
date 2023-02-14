import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACT_RANDOM } from '../constant/typesAction';

export default function ListComp() {
    const list = useSelector(state => state.listReducer);
    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({
            type: ACT_RANDOM
        })
    }
    return (
        <div>
            <h2>Redux Array</h2>
            <p>Array: {list.toString()} </p>
            <button onClick={() => handleRandom()}>Random</button>
        </div>
    )
}
