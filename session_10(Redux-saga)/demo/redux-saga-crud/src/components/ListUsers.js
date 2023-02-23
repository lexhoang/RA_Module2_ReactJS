import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../redux/actions';


export default function ListUsers() {
    const listUsers = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleSort = (e) => {
        // console.log(e.target.value);
        let value = e.target.value;
        let array = value.split('-');
        // console.log(array);
        dispatch(actions.act_user_sort(array[0], array[1]));
    }

    const handleUpdate = (userUpdated) => {
        localStorage.setItem('userUpdate', JSON.stringify(userUpdated));
        //chuyển sang UpdateUser Component
        navigate('/updateUser');
    }

    const handleDelete = (deleteId) => {
        dispatch(actions.act_delete_user(deleteId));
    }


    //Gọi action act_get_user khi component được mount
    /*
    useEffect:
        1. useEffect(callback): gọi khi mount và re-render
        2. useEffect(callback, []): gọi khi mount
        3. useEffect(callback,[deps]): gọi khi mount và deps thay đổi
    */
    useEffect(() => {
        //Thực hiện khi component mount
        dispatch(actions.act_get_user());
    }, []);

    //Lấy state từ store và hiển thị lên component
    return (
        <div>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace text-decoration-underline'> Nhân Viên MAS-HCE </h2>

            <div className='col-10 mx-auto'>


                <div className='row  my-4 justify-content-around'>
                    <div className='col-4'>
                        <button className='btn btn-success' onClick={() => navigate("/createUser")}> + Create User</button>
                    </div>

                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-8'>
                                <input type="text" className="form-control"
                                    onChange={(e) => { setSearch(e.target.value); dispatch(actions.act_user_search(search)) }}
                                    placeholder="Tìm Kiếm"
                                />
                                {/* <button className="btn btn-success" onClick={() => dispatch(actions.act_user_search(search))}>Search</button> */}
                            </div>

                            <div className='col-4'>
                                <select className="form-select" onChange={handleSort}>
                                    <option value="">Sắp xếp</option>
                                    <option value="fullname-asc">Name-asc</option>
                                    <option value="fullname-desc">Name-desc</option>
                                    <option value="age-asc">Age-asc</option>
                                    <option value="age-desc">Age-desc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <table className="text-center table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse bg-info text-white">
                        <tr className="thead-table">
                            <th>STT</th>
                            <th>Email</th>
                            <th>Mật Khẩu</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Kinh Nghiệm</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUsers.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.age}</td>
                                        <td>{user.exp} năm</td>
                                        <td>
                                            <div className='btn-group'>
                                                <button className="btn btn-warning" onClick={() => handleUpdate(user)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
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
