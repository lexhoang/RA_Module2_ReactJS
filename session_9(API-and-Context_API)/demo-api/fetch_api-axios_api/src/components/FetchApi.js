import React, { useState } from 'react'

export default function FetchApi() {

    const handleGetApi = () => {
        fetch('http://localhost:8000/products')
            .then((response) => response.json())
            .then((data) => console.log("Success: ", data))
            .catch((error) => console.log("Error: ", error));
    }

    const handlePostApi = () => {
        const addNew = {
            "productName": "Áo Culottes",
            "description": "Áo Culottes co dãn 4 chiều, mặc đi làm hay lên bar đều tôn dáng cặp giò của bạn"
        }

        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addNew)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('Error: ', err))
    }

    const handlePutApi = () => {
        const updateNew = { "productName": "Váy baby" }

        fetch(`http://localhost:8000/products/8`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateNew)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('ERROR: ', err))
    }

    const handlePatchAPI = () => {
        const updateNew = { "description": "Váy baby đáng yêu!!!" }

        fetch(`http://localhost:8000/products/8`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateNew)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('ERROR: ', err))
    }

    const handleDeleteAPI = () => {
        fetch('http://localhost:8000/products/8', {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => console.log("Success: ", data))
            .catch((error) => console.log("Error: ", error));
    }

    return (
        <div>
            <h2>Fetch Api</h2>
            <div className="my-5">
                <button onClick={() => handleGetApi()}>GET Fetch API</button>
                <button onClick={() => handlePostApi()} >POST Fetch API</button>
                <button onClick={() => handlePutApi()}>PUT Fetch API</button>
                <button onClick={() => handlePatchAPI()}> PATCH Fetch API</button>
                <button onClick={() => handleDeleteAPI()}> DELETE Fetch API</button>
            </div>
        </div >
    )
}
