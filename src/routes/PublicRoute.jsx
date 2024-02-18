import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const role = localStorage.getItem('role');
    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicRoute
