import React from 'react'
import { Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Student(props) {
    return (
        <tr>
            <td>{props.index + 1} </td>
            <td>{props.student.studentId}</td>
            <td>{props.student.studentName}</td>
            <td>{props.student.age}</td>
            <td>{props.student.sex == true ? "Nam" : "Nữ"}</td>
            <td>
                <Button type="primary" size="medium" className='bg-info mx-2'><EyeOutlined /> Xem</Button>
                <Button type="primary" size="medium" className='bg-warning mx-2'><EditOutlined />Sửa</Button>
                <Button type="primary" size="medium" className='bg-danger mx-2' onClick={() => props.handleDeleteStudent()}><DeleteOutlined />Xóa</Button>
            </td>
        </tr>
    )
}
