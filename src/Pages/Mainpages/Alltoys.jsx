import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Alltoys = () => {

    const [info,setInfo]= useState([])
     
    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])

    console.log(info)
    return (
        <div>
        <p className='mt-4 font-mono text-3xl text-center text-teal-500 underline decoration-sky-500 hover:font-serif'>Choose from a wide variety</p>
         
     <div className='grid grid-cols-3 gap-6 my-8'>
   

        {
            info.map(singledata =>  <div key={singledata.id} className="shadow-xl card w-96 bg-base-100 image-full">
  <figure><img src={singledata.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{singledata.toy_name}</h2>
    <p>
        <p>Sub Category: {singledata.sub_category}</p>
        <p>Seller: {singledata.seller}</p>
        <p>Price: {singledata.price} $</p>
        <p>In stock: {singledata.available_quantity} </p>
    </p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary"><Link to={`/alltoys/${singledata.id}`}>View details</Link></button>
    </div>
  </div>
</div>
            )
        }
     </div>
     </div>
    );
};

export default Alltoys;