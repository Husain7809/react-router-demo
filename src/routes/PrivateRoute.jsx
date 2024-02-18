import React from 'react'
import { userData } from "../constants/user";
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const role = localStorage.getItem('role');

    return (
        <>
            {role && role === userData.ADMIN ? <Outlet /> : <Navigate to='/error' />}
        </>
    )
}

export default PrivateRoute
