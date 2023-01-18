import React, { useState, useMemo } from 'react';

export default function ExUseMemo() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [listProduct, setListProduct] = useState([]);
    const handleAdd = () => {
        //add sản phẩm vào listProduct
        setListProduct([...listProduct, { productName: productName, price: price }]);
        setProductName("");
        setPrice("");
    }
    const elementListProduct = listProduct.map((product, index) => {
        return <li key={index}>{product.productName}-{product.price} USD</li>
    });
    const calTotalAmount = useMemo(() => {
        console.log("Vào hàm tính tổng tiền");
        let totalAmount = 0;
        listProduct.forEach(product => {
            totalAmount += parseFloat(product.price);
        });
        return totalAmount;
    }, [listProduct]);

    return (
        <div>
            <h2>Rikkei Academy - React Hook - useMemo</h2>
            <input type={"text"} name="productName" onChange={(e) => setProductName(e.target.value)} value={productName} placeholder='input product name' />
            <input type={"text"} name="price" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='input price' />
            <button onClick={handleAdd}>Add</button>
            <p>Tổng tiền: {calTotalAmount}</p>
            <ul>
                {elementListProduct}
            </ul>
        </div>
    )
}
