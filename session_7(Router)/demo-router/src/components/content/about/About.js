import React from 'react'
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function About() {
    return (
        <div>
            <Typography variant="h3">About</Typography>
            <Link to="rikkeisoft" className='m-4'>RikkeiSoft</Link>
            <Link to="rikkeiacademy" className='m-4'>RikkeiAcademy</Link>
            {/* Khai báo component con được hiển thị */}
            <Outlet />
        </div>
    )
}
