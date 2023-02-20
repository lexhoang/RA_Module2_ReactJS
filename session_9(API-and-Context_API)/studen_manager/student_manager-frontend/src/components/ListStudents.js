import React, { useEffect, useState } from 'react'

export default function listStudents(props) {
    const { listStudent } = props;

    const handleDeleteStudent = (studentID) => {
        console.log("addada", studentID);
        props.deleteStudent(studentID)
    }

    const valueSelect = (value) => {
        switch (value) {
            case "HN":
                return "HA NOI";

            case "DN":
                return "ĐÀ NẴNG";

            case "HCM":
                return "TP.HỒ CHÍ MINH";

            default:
                break;
        }
    }
    return (
        <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr className='p-3 bg-success text-white'>
                    <th>STT</th>
                    <th>Student Name</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th>Comment</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listStudent.map((student, index) => {
                        return (
                            <tr key={student.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{student.studentName}</td>
                                <td>{student.age}</td>
                                <td>{valueSelect(student.country)}</td>
                                <td>{student.comment}</td>
                                <td colSpan="2">
                                    <div className='btn-group'>
                                        <button className="btn btn-warning" onClick={() => props.editStudent(student)} >Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
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
