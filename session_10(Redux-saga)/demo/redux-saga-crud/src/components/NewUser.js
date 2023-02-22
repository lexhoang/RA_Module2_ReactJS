import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { act_create_user } from '../redux/actions';

export default function NewUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //Khai báo các state lưu trữ thông tin bên trong newUser
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        fullname: "",
        age: "",
        exp: ""
    })

    const onChangeInputData = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handleCreateNew = (e) => {
        e.preventDefault();
        dispatch(act_create_user(newUser));
        navigate('/')
    }

    return (
        <div className="col-4 mx-auto">
            <h2 className="text-center  my-5"></h2>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace'>
                Create New User
            </h2>

            <form className="form-inline" onSubmit={handleCreateNew}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={newUser.email} onChange={onChangeInputData} id="email" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={newUser.password} onChange={onChangeInputData} id="password" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="fullname">full Name</label>
                    <input type="text" name="fullname" value={newUser.fullname} onChange={onChangeInputData} id="fullname" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" value={newUser.age} onChange={onChangeInputData} id="age" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="exp">Exp</label>
                    <input type="text" name="exp" value={newUser.exp} onChange={onChangeInputData} id="exp" className="form-control" placeholder="" />
                </div>

                <div className="mt-4 text-center">
                    <input type="submit" className='btn btn-success' value='Create New' />
                </div>
            </form>

        </div>
    )
}
