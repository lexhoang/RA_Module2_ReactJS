import React, { useState, useEffect } from 'react'

export default function FormDataStudent(props) {
    const { studentEdit, setStudentEdit } = props;

    const [studentInput, setStudentInput] = useState({ id: "", studentName: "", age: "", country: "", comment: "" })

    const onChangeInput = (e) => {
        setStudentInput({ ...studentInput, [e.target.name]: e.target.value })
    }


    const handleAddStudent = () => {
        console.log("Add");
        props.addStudent(studentInput);
        setStudentInput({ id: "", studentName: "", age: "", country: "", comment: "" });
        setStudentEdit({ action: "add", value: "" })
    }

    const handleUpdateStudent = () => {
        console.log("Update");
        props.updateStudent(studentInput);
        setStudentInput({ id: "", studentName: "", age: "", country: "", comment: "" });
        setStudentEdit({ action: "update", value: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentEdit.value == "") {
            handleAddStudent()
        } else {
            handleUpdateStudent()
        }
    }

    useEffect(() => {// null
        if (studentEdit.value !== "") {
            setStudentInput(studentEdit.value)
        }
        // console.log("ID:", studentInput.id);
    }, [studentEdit]);



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
                            <input type="text" disabled={studentEdit.action === "edit" ? true : ""} value={studentInput.id} name="id" onChange={onChangeInput} id="id" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="name">Student Name</label>
                        </td>
                        <td>
                            <input type="text" value={studentInput.studentName} name="studentName" onChange={onChangeInput} id="name" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="age">Age</label>
                        </td>
                        <td>
                            <input type="text" value={studentInput.age} name="age" onChange={onChangeInput} id="age" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <label htmlFor="country">Country</label>
                        </td>
                        <td>
                            <select value={studentInput.country} name="country" onChange={onChangeInput} className="form-control">
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
                            <input type="text" value={studentInput.comment} name="comment" onChange={onChangeInput} id="comment" className="form-control" placeholder="" aria-describedby="helpId" />
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <input type="submit" className="form-control btn btn-success" value={studentEdit.action === "edit" ? "Update" : "Add New"} />
                        </td>

                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
