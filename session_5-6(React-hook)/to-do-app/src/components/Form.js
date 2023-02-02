import React, { useState } from 'react'

export default function Form(props) {
    const [newTodo, setNewTodo] = useState("");

    const onChangeAddNew = (e) => {
        setNewTodo(e.target.value);
    }

    const onClickAddNew = (e) => {
        console.log("Thêm mới: ");
        props.handleAddNew(e);
        setNewTodo('');
    }
    
    return (
        <div>
            <form className="form-inline">
                <div className="row justify-content-between">
                    <div className="col-9 my-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={onChangeAddNew}
                            value={newTodo}
                        />
                    </div>
                    <div className="col-3 my-4">
                        <button className="btn btn-success" onClick={(e) => { e.preventDefault(); onClickAddNew(newTodo) }}>Add New</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
