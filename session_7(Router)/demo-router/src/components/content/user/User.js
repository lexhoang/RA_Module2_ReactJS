import React from 'react'
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function User() {
    return (
        <div>
            <Typography variant="h3">User</Typography>
            <NavLink to="userDetail" >User Details</NavLink>
            {/* Khai báo component con được hiển thị */}
            <Outlet />
        </div>
    )
}
