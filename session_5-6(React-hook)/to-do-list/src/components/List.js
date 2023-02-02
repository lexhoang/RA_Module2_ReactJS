import React, { useState } from 'react'

export default function List(props) {
    console.log("List: ", props.list);
    const [id, setId] = useState();
    const [editWork, setEditWork] = useState("");

    const onChangeHandleList = (e) => {
        setEditWork(e.target.value);
    }
    
    const handleEdit = (index) => {
        setId(index);
        setEditWork("");
    }

    const handleUpdate = (index) => {
        props.handleUpdate(editWork, index);
        setId("");
    }
    return (
        <>
            <ol className="my-5">
                {
                    props.list.map((element, index) => {
                        return (
                            <li key={index}>
                                <div className="row justify-content-around">
                                    <div className="col-6 my-3">
                                        <input type="text" name="" id="" disabled={id === index ? false : true} className="form-control" value={id === index ? (editWork || element) : element} onChange={onChangeHandleList} placeholder="" aria-describedby="helpId" />
                                    </div>

                                    <div className="col-3 my-3 btn-group">
                                        {
                                            id === index ?
                                                <button className='btn btn-success' onClick={() => handleUpdate(index)}>Update</button>
                                                :
                                                <button className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button>
                                        }

                                        <button className='btn btn-danger' onClick={() => { props.handleDelete(index) }}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}
