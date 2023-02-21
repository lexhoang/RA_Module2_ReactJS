import React from 'react'
import { Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Student(props) {
    const { student } = props;
    return (
        <tr>
            <td>{props.index + 1} </td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.sex == "true" ? "Nam" : "Nữ"}</td>
            <td>
                <Button type="primary" size="medium" className='bg-info mx-2'
                    onClick={() => props.handleDetailStudent(student)}><EyeOutlined /> Xem</Button>

                <Button type="primary" size="medium" className='bg-warning mx-2'
                    onClick={() => props.handleEditStudent(student)}><EditOutlined />Sửa</Button>

                <Button type="primary" size="medium" className='bg-danger mx-2' onClick={() => props.handleDeleteStudent()}><DeleteOutlined />Xóa</Button>
            </td>
        </tr>
    )
}
