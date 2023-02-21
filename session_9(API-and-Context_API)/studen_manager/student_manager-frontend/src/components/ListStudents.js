import React, { useEffect, useState } from 'react'

export default function listStudents(props) {
    const { listStudent } = props;

    const valueSelectStudent = (option) => {
        switch (option) {
            case "HN":
                return "Hà Nội"
            case "DN":
                return "Đà Nẵng"

            case "HCM":
                return "Tp.Hồ CHí Minh"
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
                                <td>{valueSelectStudent(student.country)}</td>
                                <td>{student.comment}</td>
                                <td colSpan="2">
                                    <div className='btn-group'>
                                        <button className="btn btn-warning" onClick={() => props.handleEditStudent(student)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => props.deleteStudentAPI(student.id)}>Delete</button>
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
