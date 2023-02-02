import React, { useState } from 'react'

export default function TodoList(props) {
    const [idTodo, setIdTodo] = useState();
    const [editTodo, setEditTodo] = useState("");

    const changeEditTodo = (e) => {
        setEditTodo(e.target.value)
    }

    const onClickEditTodo = (paramId) => {
        console.log("Edit todo có id: " + paramId);
        setIdTodo(paramId);
        setEditTodo();
    }

    const onClickUpdateTodo = (paramId) => {
        props.handleUpdate(editTodo, paramId);
        setIdTodo();
        console.log("Đã sửa todo có id: " + paramId);
    }

    const onKeyEnter = (e, paramId) => {
        if (e.keyCode === 13) {
            onClickUpdateTodo(paramId);
        }
    }


    return (
        <div>
            <ol>
                {
                    props.todoList.map((element, index) => {
                        return (
                            <li key={index}>
                                <div className="my-5 row">
                                    <div className="col-8" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            aria-describedby="helpId"
                                            disabled={element.id === idTodo ? false : true}
                                            value={element.id == idTodo ? (editTodo || element.name) : element.name}
                                            onChange={changeEditTodo}
                                            onKeyDown={(e) => onKeyEnter(e, element.id)}
                                        />
                                    </div>
                                    <div className="col-4 btn-group">
                                        {
                                            element.id === idTodo ?
                                                <button className="btn btn-success" onClick={() => onClickUpdateTodo(element.id)}>Update</button>
                                                :
                                                <button className="btn btn-primary" onClick={() => onClickEditTodo(element.id)}>Edit</button>
                                        }
                                        <button className="btn btn-danger" onClick={() => props.handleDelete(element.id)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
