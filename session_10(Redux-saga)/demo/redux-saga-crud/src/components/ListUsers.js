import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { act_get_user } from '../redux/actions';


export default function ListUsers() {
    const dispatch = useDispatch();

    //Gọi action act_get_user khi component được mount

    /*
    useEffect:
        1. useEffect(callback): gọi khi mount và re-render
        2. useEffect(callback, []): gọi khi mount
        3. useEffect(callback,[deps]): gọi khi mount và deps thay đổi
    */
    useEffect(() => {
        //Thực hiện khi component mount
        dispatch(act_get_user())
    },[])
    return (
        <div>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace text-decoration-underline'> Nhân Viên MAS-HCE </h2>

            <div className='col-10 mx-auto'>
                <table className="text-center table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse bg-success text-white">
                        <tr className="thead-table">
                            <th>STT</th>
                            <th>Mã Số</th>
                            <th>Email</th>
                            <th>Mật Khẩu</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Kinh Nghiệm</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>1</td>
                            <td>test@gmail.com</td>
                            <td>123456</td>
                            <td>Test</td>
                            <td>20</td>
                            <td>2 năm</td>
                            <td>
                                <div className='btn-group'>
                                    <button class="btn btn-warning">Edit</button>
                                    <button class="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
