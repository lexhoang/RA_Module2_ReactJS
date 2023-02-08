import React from 'react'
import Student from './Student';
import { Typography } from 'antd';

const { Title } = Typography
export default function ListStudent(props) {
    return (
        <div>
            <Title level={2} className="my-4">Danh sách học viên</Title>
            <table class="table table-striped">
                <thead class="thead-inverse">
                    <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listStudent.map((student, index) => {
                            return (
                                <Student key={index} index={index} student={student} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
