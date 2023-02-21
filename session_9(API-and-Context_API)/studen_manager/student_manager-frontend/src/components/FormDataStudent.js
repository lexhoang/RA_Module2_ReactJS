import React, { useState, useEffect } from 'react'

export default function FormDataStudent(props) {
    const { studentEdit, setStudentEdit } = props;


    const [listStudentInput, setListStudentInput] = useState({ id: "", studentName: "", age: "", country: "", comment: "" })
    const onChangeInput = (e) => {
        setListStudentInput({ ...listStudentInput, [e.target.name]: e.target.value })
    }

    const handleAddStudent = () => {
        props.postStudentApi(listStudentInput);
        setStudentEdit({ action: "add", value: "", color: "success" });
    }

    const handleUpdateStudent = () => {
        props.putStudentApi(listStudentInput);
        setStudentEdit({ action: "update", value: "", color: "success" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentEdit.value != "") {
            handleUpdateStudent();
        } else {
            handleAddStudent();
        }
        setListStudentInput({ id: "", studentName: "", age: "", country: "", comment: "" })
    }

    const handleComeBack = () => {
        setStudentEdit({ action: "comeback", value: "", color: "success" });
        setListStudentInput({ id: "", studentName: "", age: "", country: "", comment: "" })
    }

    useEffect(() => {
        if (studentEdit.value !== "") {
            setListStudentInput(studentEdit.value)
        }
    }, [studentEdit])
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse bg-success text-white" style={{ letterSpacing: '5px' }}>
                    <tr>
                        <th colSpan="2" className='p-3 text-center'>FORM DATA STUDENT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">
                            <label htmlFor="id">ID</label>
                        </td>
                        <td>
                            <input type="text" disabled={studentEdit.action == "edit" && true} value={listStudentInput.id} name='id' onChange={onChangeInput} id="id" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="name">Student Name</label>
                        </td>
                        <td>
                            <input type="text" value={listStudentInput.studentName} name='studentName' onChange={onChangeInput} id="studentName" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="age">Age</label>
                        </td>
                        <td>
                            <input type="text" value={listStudentInput.age} name='age' onChange={onChangeInput} id="age" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="country">Country</label>
                        </td>
                        <td>
                            <select className="form-control" value={listStudentInput.country} name='country' onChange={onChangeInput}>
                                <option value="NOT">Chọn Địa Chỉ</option>
                                <option value="HN">Hà Nội</option>
                                <option value="DN">Đà Nẵng</option>
                                <option value="HCM">TP.Hồ Chí Minh</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="comment">Comment</label>
                        </td>
                        <td>
                            <input type="text" value={listStudentInput.comment} name='comment' onChange={onChangeInput} id="comment" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    {/* <tr>
                        <td>
                            <input type="submit" className={`form-control btn btn-${studentEdit.color}`} value={studentEdit.value !== "" ? "Update" : "Add New"} />
                        </td>

                        <td>
                            {
                                studentEdit.value !== "" ?
                                    <button className="btn btn-info" onClick={() => handleComeBack()}>Quay lại</button>
                                    : ""
                            }
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <div className='row'>
                <div className='col-6'>
                    <input type="submit" className={`form-control btn btn-${studentEdit.color}`} value={studentEdit.value !== "" ? "Update" : "Add New"} />
                </div>

                <div className='col-6 mx-auto text-center'>
                    {
                        studentEdit.value !== "" ?
                            <button className="w-50 btn btn-outline-info" onClick={() => handleComeBack()}>Quay lại</button>
                            : ""
                    }
                </div>

            </div>
        </form>
    )
}
