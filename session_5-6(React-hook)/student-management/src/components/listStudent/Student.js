import React from 'react'
import { Button } from 'antd';

export default function Student(props) {
    return (
        <tr>
            <td>{props.index + 1} </td>
            <td>{props.student.studentId}</td>
            <td>{props.student.studentName}</td>
            <td>{props.student.age}</td>
            <td>{props.student.sex == true ? "Nam" : "Nữ"}</td>
            <td>
                <Button type="primary" size="large" className='bg-info mx-2'>Xem</Button>
                <Button type="primary" size="large" className='bg-success mx-2'>Sửa</Button>
                <Button type="primary" size="large" className='bg-danger mx-2'>Xóa</Button>
            </td>
        </tr>
    )
}
