import React, { useState, useCallback } from 'react';
import Callback from './Callback';

export default function ExUseCallBack() {
    const [count, setCount] = useState(0);
    //useCallback(callback,[]): được gọi khi mouting (render)
    const handleUp = useCallback(() => {
        //Cập nhật state count
        setCount(preCount => preCount + 1);
    }, []);
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useCallback(callback,[])</h2>
            <Callback handleUp={handleUp}></Callback>
            <p>Current Value: {count}</p>
        </div>
    )
}
