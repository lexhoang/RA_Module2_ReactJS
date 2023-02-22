import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_update_user } from '../redux/actions';

export default function UpdateUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [editUser, setEditUser] = useState({
        id: "",
        email: "",
        // password: "",
        fullname: "",
        age: "",
        exp: ""
    });

    const onChangeInputData = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    }

    const handleUpdateUser = () => {
        console.log(editUser);
        dispatch(act_update_user(editUser));
        navigate('/');
    }

    useEffect(() => {
        //Lấy dữ liệu từ localStorage và lưu vào email, fullname
        let user = JSON.parse(localStorage.getItem('userUpdate'));
        setEditUser(user)
    }, [])



    return (
        <div className="col-4 mx-auto">
            <h2 className="text-center  my-5"></h2>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace'>
                Update New User
            </h2>

            <form className="form-inline" onSubmit={(e) => { e.preventDefault(); handleUpdateUser() }}>
                <div className="form-group">
                    <label htmlFor="id">User ID</label>
                    <input type="text" value={editUser.id} onChange={onChangeInputData} disabled className="form-control" placeholder="" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={editUser.email} onChange={onChangeInputData} id="email" className="form-control" placeholder="" />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={editUser.password} onChange={onChangeInputData} id="password" className="form-control" placeholder="" />
                </div> */}

                <div className="form-group mt-4">
                    <label htmlFor="fullname">full Name</label>
                    <input type="text" name="fullname" value={editUser.fullname} onChange={onChangeInputData} id="fullname" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" value={editUser.age} onChange={onChangeInputData} id="age" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="exp">Exp</label>
                    <input type="text" name="exp" value={editUser.exp} onChange={onChangeInputData} id="exp" className="form-control" placeholder="" />
                </div>

                <div className="mt-4 text-center">
                    <input type="submit" className='btn btn-success' value='Create New' />
                </div>
            </form>

        </div>
    )
}
