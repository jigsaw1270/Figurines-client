import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Shared/Navbar';
import Footer from '../Pages/Home/Shared/Footer';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
       
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;