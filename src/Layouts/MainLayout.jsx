import React from 'react';
import NavBar from '../Components/NavBarComponents/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='mb-[68px]'>
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;