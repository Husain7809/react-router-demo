import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userData } from '../constants/user';

const NavBar = () => {
    const [user, setUser] = useState(null);



    useEffect(() => {
        setUser(localStorage.getItem('role'))
        localStorage.setItem('role', 'admin');
    })

    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {
                user === userData.ADMIN ? <NavLink to='/dashboard'>Dashboard</NavLink> : ''
            }
            {
                user === userData.USER | user === userData.ADMIN ? <NavLink to='/dashboard-user'>Dashboard-User</NavLink> : ''
            }

            {user ? <p>Your role is = {user}</p> : ''}
        </>
    )
}

export default NavBar
