import React from 'react'
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import DashboardUser from '../pages/DashboardUser';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserRoute from './UserRoute';
import ErrorPage from '../pages/ErrorPage';

const Template = () => {
    return (
        <>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route element={<UserRoute />}>
                    <Route path='/dashboard-user' element={<DashboardUser />} />
                </Route>
                <Route path='/error' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default Template
