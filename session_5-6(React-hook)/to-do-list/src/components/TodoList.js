import React, { useState } from 'react'

export default function TodoList(props) {
    const [idEdit, setIdEdit] = useState();
    const [editWork, setEditWork] = useState("");

    const changeEditTodo = (e) => {
        setEditWork(e.target.value);
    }

    const clickEditTodo = (idEdit) => {
        setIdEdit(idEdit);
        setEditWork("");
        console.log(idEdit);
        console.log("editWork:", editWork);
    }

    const clickUpdateTodo = (idUpdate) => {
        setIdEdit();
        props.handleUpdate(idUpdate, editWork);
        console.log(editWork);
    }

    return (
        <table className="table table-striped table-hover my-5">
            <thead>
                <tr>
                    <th>Stt</th>
                    <th>ID</th>
                    <th>List</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((element, index) => {
                        return (
                            <tr key={element.id}>
                                <td>{index + 1}</td>
                                <td>{element.id}</td>
                                <td>
                                    {
                                        element.id === idEdit ?
                                            <input className="form-control text-center" value={idEdit === element.id ? (editWork || element.content) : element.content} onChange={changeEditTodo} />
                                            :
                                            <p>{element.content}</p>
                                    }
                                </td>
                                <td>
                                    <div className="btn-group">
                                        {
                                            element.id === idEdit ?
                                                <button className='btn btn-success' onClick={() => clickUpdateTodo(element.id)}>Update</button>
                                                :
                                                <button className='btn btn-primary' onClick={() => clickEditTodo(element.id)}>Edit</button>
                                        }
                                        <button className='btn btn-danger' onClick={() => props.handleDelete(element.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

