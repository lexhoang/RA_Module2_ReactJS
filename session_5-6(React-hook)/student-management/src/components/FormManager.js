import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined, SendOutlined, RollbackOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default function FormManager(props) {
    const { listStudent, formListStudent, setFormListStudent } = props;

    const [inputData, setInputData] = useState(
        { id: "", studentId: "", studentName: "", age: "", sex: "", birthDate: "", birthPlace: "", address: "" },
    )

    const onChangeInputData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        console.log(inputData.studentId);
    }

    const clickAddNewStudent = () => {
        props.handleAddStudent(inputData);
        setFormListStudent({ action: "", value: "" })
    }

    const clickUpdateStudent = () => {
        props.handleUpdateStudent(inputData);
        setFormListStudent({ action: "", value: "" })
    }

    const comeBack = () => {
        setFormListStudent({ action: "", value: "" })
    }
    useEffect(() => {
        if (formListStudent.value != "") {
            setInputData(formListStudent.value)
        } else {
            setInputData({ id: "", studentId: "", studentName: "", age: "", sex: "", birthDate: "", birthPlace: "", address: "" })
        }
    }, [formListStudent])


    return (
        <div className="py-4 bg-light rounded">
            <Title level={2} className="my-4">Thông tin học viên</Title>
            {/* <form className="form-inline" onSubmit={}> */}
            {/* STUDENT ID */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="studentId">Mã Sinh Viên</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.studentId} name="studentId" onChange={onChangeInputData} id="studentId" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>
            {/* Name */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="studentName">Tên Sinh Viên</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.studentName} name="studentName" onChange={onChangeInputData} id="studentName" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>

            {/* TUỔI */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="age">Tuổi</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.age} name="age" onChange={onChangeInputData} id="age" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>

            {/* Giới Tính */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="sex">Giới Tính</label>
                </div>
                <div className="col-9">
                    <select className="form-control" value={inputData.sex} name="sex" onChange={onChangeInputData}>
                        <option value="NOT" >Chọn Giới Tình</option>
                        <option value="true" >Nam</option>
                        <option value="false" >Nữ</option>
                    </select>
                </div>
            </div>

            {/* NGÀY SINH */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="birthDate">Ngày Sinh</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.birthDate} name="birthDate" onChange={onChangeInputData} id="birthDate" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>

            {/* NƠI SINH */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="birthPlace">Nơi Sinh</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.birthPlace} name="birthPlace" onChange={onChangeInputData} id="birthPlace" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>

            {/* ĐỊA CHỈ */}
            <div className="form-group row m-4">
                <div className="col-3">
                    <label htmlFor="address">Địa Chỉ</label>
                </div>
                <div className="col-9">
                    <input type="text" value={inputData.address} name="address" onChange={onChangeInputData} id="address" className="form-control" placeholder="Nhập mã sinh viên" aria-describedby="helpId" />
                </div>
            </div>

            <div>
                {
                    formListStudent.action == "add" ?
                        <button className='btn btn-success w-50 m-4' onClick={() => clickAddNewStudent()}><SendOutlined /> Thêm Dữ Liệu</button>
                        : formListStudent.action == "edit" ?
                            <>
                                <button className='btn btn-success w-25 m-4' onClick={() => clickUpdateStudent()}><SendOutlined /> Sửa Dữ Liệu</button>
                                <button className='btn btn-info w-25 m-4 text-white' onClick={() => comeBack()}><RollbackOutlined /> Quay lại</button>
                            </>
                            : ""
                }
            </div>
            {/* </form > */}
        </div >
    )
}
