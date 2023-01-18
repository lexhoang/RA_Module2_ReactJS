import React, { useReducer } from 'react'
// State phức tạp
/*
    student:{
        studentId,
        studentName,
        address:{
            city,
            provice...
        }
    }
*/
// Khởi tạo reducer: state cũ - cần thay đổi, action - hành động để thay đổi state
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            return new Error("Action invalid")
    }
}
export default function () {
    // useReducer(reducer,initState): khai báo state và phương thức dispatch để bắn action cập nhật state
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useReducer</h2>
            <p>Current Value: {count}</p>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </div>
    )
}
