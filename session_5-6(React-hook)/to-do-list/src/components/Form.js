
import React, { useState } from 'react'

export default function Form(props) {
    const [newWork, setNewWork] = useState("");

    const onChangeHandle = (e) => {
        setNewWork(e.target.value)
    }

    const clickAddNew = (e) => {
        props.handleAddNew(e);
        setNewWork("");
    }

    return (
        <form className="form-inline">
            <div className="row my-4">
                <div className="col-9">
                    <div className="form-group">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            value={newWork}
                            onChange={onChangeHandle}
                        />
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); clickAddNew(newWork) }}>Add New</button>
                </div>
            </div>
        </form>
    )
}