import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './root.css';
import Home from '../home/home';
import UpdateUser from '../update/update';
import DeleteUser from '../delete/delete';
import CreateUser from '../create/create';

const Root = () => {
    return (
        <>
            <nav className='root'>
                <ul>
                    <li>
                        <NavLink to="/" element={<Home />}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" element={<CreateUser />}>
                            Create user
                        </NavLink></li>
                    <li>
                        <NavLink to="/update" element={<UpdateUser />}>
                            Update user</NavLink></li>
                    <li>
                        <NavLink to="/delete" element={<DeleteUser />}>
                            Delete user
                        </NavLink>
                    </li>
                </ul>
            </nav >
            <Outlet />
        </>
    );
};

export default Root;
