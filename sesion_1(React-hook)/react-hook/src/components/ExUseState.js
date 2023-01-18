import React, { useState, useEffect } from 'react'

export default function ExUseState() {
    // Khởi tạo giá trị state với hàm useState
    const [count, setCount] = useState(0);
    const arr = [1, 3, 5, 7, 9];
    const [list, setList] = useState(arr);
    const handleRandom = () => {
        // Thêm một giá trị random vào list
        setList([...list, parseInt(Math.random() * 10)]);
    }
    //Khởi tạo state là 1 object
    const [objState, setObjState] = useState({ count: 0, list: arr });
    const handleRandomObject = () => {
        setObjState({
            count: objState.count,
            list: [...objState.list, parseInt(Math.random() * 10)]
        });
    }
    // Sử dụng useEffect
    //1. Sử dụng useEffect(callback)--> được gọi khi render(componentDidMount) hoặc re-render(ComponentDidUpdate)
    useEffect(() => {
        console.log("useEffect(callback) được gọi khi render và re-render");
    });
    //2. Sử dụng useEffect(callback,[])--> được gọi khi render(componentDidMount)
    useEffect(() => {
        console.log("useEffect(callback,[]) được gọi khi render");
    }, []);
    //3. Sử dụng useEffect(callback,[deps]) --> được gọi khi render và khi deps thay đổi
    useEffect(() => {
        console.log("useEffect(callback,[count,list] được gọi khi render và khi count thay đổi)");
    }, [count, list]);
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useState</h2>
            <p>Current Value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <p>Current Array: {list.toString()}</p>
            <button onClick={handleRandom}>Random</button>

            <h2>Rikkei Academy - React Hooks - useState - object</h2>
            <p>Current Value: {objState.count}</p>
            <button onClick={() => setObjState({ count: objState.count + 1, list: objState.list })}>Up</button>
            <button onClick={() => setObjState({ count: objState.count - 1, list: objState.list })}>Down</button>
            <p>Current Array: {objState.list.toString()}</p>
            <button onClick={handleRandomObject}>Random</button>
        </div>
    )
}
