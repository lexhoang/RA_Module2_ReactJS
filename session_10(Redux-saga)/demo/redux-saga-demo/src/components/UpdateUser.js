import React from 'react'

export default function UpdateUser() {
    return (
        <div className="col-4 mx-auto">
            <h2 className="text-center  my-5"></h2>
            <h2 className='my-5 text-center text-danger fs-1 fw-bold fst-italic font-monospace'>
                Update User
            </h2>

            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="form-control" placeholder="" />
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="form-control" placeholder="" />
                </div>

                <div className="mt-4 text-center">
                    <input type="submit" className='w-25 btn btn-success' value='Update' />
                </div>
            </form>

        </div>
    )
}
