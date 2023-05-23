import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';


import { TabList ,Tab, TabPanel,Tabs } from 'react-tabs';

const Tablet = () => {
    
    const [info,setInfo]= useState([])
     
    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <Tabs className="my-5">
    <TabList>
      <Tab>DC Comics</Tab>
      <Tab>Marvel</Tab>
      <Tab>Anime</Tab>
    </TabList>

    <TabPanel>
    <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"> 
<div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/nsqg9D2/genshin-raiden-shogun-figure-1.webp" alt="" /></div>
  <div><li>Name : Raiden shogun</li>
  <li>Price: 14</li>
  <li>Rating: 5</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/YQrh77m/FIG17-0561.jpg" alt="" /></div>
  <div><li>Name : Ningyuang </li>
  <li>Price: 16</li>
  <li>Rating: 4</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div>
</div>
    </TabPanel>
    <TabPanel>
    <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"> 
<div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/gZQLRmz/61-Ynzuyk-Xl-L.jpg" alt="" /></div>
  <div><li>Name : Luffy gear 4</li>
  <li>Price: 17 </li>
  <li>Rating:4</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/p0fYM4t/589195877-max.jpg" alt="" /></div>
  <div><li>Name : Qiqi</li>
  <li>Price: 2</li>
  <li>Rating: 3</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div>
</div>
    </TabPanel>
    <TabPanel>
    <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"> 
<div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/7JsbvM0/597708834-max.jpg" alt="" /></div>
  <div><li>Name : Yae miko</li>
  <li>Price: 13</li>
  <li>Rating: 8</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><div className='flex gap-36'>
<div><img className='w-24' src="https://i.ibb.co/DWLqT99/603152773-max.jpg" alt="" /></div>
  <div><li>Name : luffy-zoro </li>
  <li>Price: 21</li>
  <li>Rating: 5</li>
  <button type='submit' className="bg-teal-400 btn">View Details</button> </div>
</div></div>
</div>
    </TabPanel>
  </Tabs>
    );
};

export default Tablet;