import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_getAll_user } from '../redux/actions';

export default function Users() {
    const navigate = useNavigate();
    const listUser = useSelector(state => state.users);

    const dispatch = useDispatch();
    //Bắn action để lấy cả danh sách user ở server lưu trữ ở reducer(users)
    useEffect(() => {
        //Bắn action
        dispatch(act_getAll_user());
    }, []);

    const handleUpdate = (userUpdate) => {
        localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
        navigate("/updateUser")
    }

    return (
        <div className='container'>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace text-decoration-underline'> Nhân Viên MAS-HCE </h2>

            <div className='col-10 mx-auto'>
                <table className="text-center table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse bg-success text-white">
                        <tr className="thead-table">
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Email</th>
                            <th>Mật Khẩu</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Kinh Nghiệm</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            listUser.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td scope="row"> {index + 1} </td>
                                        <td>{user.id} </td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.age}</td>
                                        <td>{user.exp}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className='btn btn-warning' onClick={() => handleUpdate(user)} >Edit</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
