import React, { useState } from 'react'

export default function Form(props) {
    const [newId, setNewId] = useState("");
    const [newWork, setNewWork] = useState("");

    const onChangeNewId = (e) => {
        setNewId(e.target.value)
    }

    const onChangeNewWork = (e) => {
        setNewWork(e.target.value)
    }

    const clickAddNew = () => {
        props.handleAddNew(newId, newWork);
        setNewId("")
        setNewWork("")
    }


    return (
        <div className="row justify-content-center">
            <div className="col-md-7 col-xs-12">
                <form className="form-inline">
                    <div className="form-group row">
                        <div className="col-3">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="form-control mb-2"
                                placeholder="Nhập ID"
                                aria-describedby="helpId"
                                onChange={onChangeNewId}
                                value={newId}
                                style={{ textAlign: 'center' }}
                            />
                        </div>

                        <div className="col-8">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="form-control mb-2"
                                placeholder="Nhập Work"
                                aria-describedby="helpId"
                                onChange={onChangeNewWork}
                                value={newWork}
                                style={{ textAlign: 'center' }}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-3 col-xs-6">
                <button className="btn btn-success" onClick={() => clickAddNew()}>Thêm mới</button>
            </div>
        </div>
    )
}

