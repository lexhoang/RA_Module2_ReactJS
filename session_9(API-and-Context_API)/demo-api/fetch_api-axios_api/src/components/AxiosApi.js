import React from 'react'
import axios from 'axios';

export default function AxiosApi() {
    const handleGet = () => {
        axios.get("http://localhost:8000/products")
            .then((data) => console.log(data.data))
            .catch((err) => console.error(err))
    }

    const handlePost = () => {
        const newProduct = {
            "productName": "Áo Culottes",
            "description": "Áo Culottes co dãn 4 chiều, mặc đi làm hay lên bar đều tôn dáng cặp giò của bạn",
        }

        axios.post("http://localhost:8000/products", newProduct)
            .then((data) => console.log(data.data))
            .catch((error) => console.log(error))
    }

    const handlePut = () => {
        const editProduct = { "productName": "Quần Đùi cầu vồng" }

        axios.put("http://localhost:8000/products/2", editProduct)
            .then((data) => console.log(data.data))
            .catch((error) => console.log(error))
    }

    const handlePatch = () => {
        const editProduct = { "description": "Đủ các màu 7 sắc cầu vồng" }

        axios.patch("http://localhost:8000/products/2", editProduct)
            .then((data) => console.log(data.data))
            .catch((error) => console.log(error));
    }

    const handleDelete = () => {
        axios.delete("http://localhost:8000/products/9")
            .then((data) => console.log(data.data))
            .catch((error) => console.log(error))
    }
    
    return (
        <div>
            <h2>Axios Api</h2>
            <div className="my-5">
                <button onClick={() => handleGet()}>GET Axios API</button>
                <button onClick={() => handlePost()}>POST Axios API</button>
                <button onClick={() => handlePut()}>PUT Axios API</button>
                <button onClick={() => handlePatch()}>PATCH Axios API</button>
                <button onClick={() => handleDelete()}>DELETE Axios API</button>
            </div>
        </div>
    )
}
