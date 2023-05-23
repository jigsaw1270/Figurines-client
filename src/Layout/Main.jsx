import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Pages/Home/Shared/Navbar';
import Footer from '../Pages/Home/Shared/Footer';
import Home from '../Pages/Home/Home';
import Mytoys from '../Pages/Mainpages/Mytoys';

const Main = () => {
    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);
    return (
        <div>
        <Navbar></Navbar>
       
            <Outlet></Outlet>
           {/* {
            toys.map(toy => <Mytoys key={toy._id} toy={toy} toys={toys} setToys={setToys}></Mytoys>)
           } */}
            <Footer></Footer>
        </div>
    );
};

export default Main;