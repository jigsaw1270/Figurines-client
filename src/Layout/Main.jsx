import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Pages/Home/Shared/Navbar';
import Footer from '../Pages/Home/Shared/Footer';
import Home from '../Pages/Home/Home';
import Mytoys from '../Pages/Mainpages/Mytoys';

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