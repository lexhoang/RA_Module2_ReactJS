import React from 'react'
import { useSelector } from 'react-redux'

export default function Notify() {
    const notify = useSelector(state => state.notifyReducer);

    return (
        <div className="alert alert-success" role="alert" id="mnotification">
            {notify} <b>successfull</b>
        </div>
    )
}
