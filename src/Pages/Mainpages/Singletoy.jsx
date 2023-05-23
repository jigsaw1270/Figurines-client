import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singletoy = () => {
    const information = useLoaderData();
    const {
        id,
        seller,
        toy_name,
        sub_category,
        img,
        price,
        available_quantity,
        description,
        rating
      } = information || {};
    return (
        <div>
          
          <div className="min-h-screen font-mono hero bg-gradient-to-r from-sky-500 to-indigo-500">
  <div className="hero-overlay bg-opacity-60"> 
  <div className="text-center mt-28 hero-content text-neutral-content">
    <div className="max-w-md">
    <img className='rounded-full' src={img} alt="" /></div>
      <h1 className="mt-4 mb-5 font-mono text-5xl font-bold text-center text-teal-100 underline decoration-sky-500 hover:font-serif">{toy_name}</h1>
      <p className="mb-5 text-left"><li>Seller : {seller}</li>
      <li>{sub_category}</li>
      <li>Price: ${price}</li>      
      <li>Stock : {available_quantity} pieces</li>
      <li>Rating : {rating}</li>
      <li>Description : {description}</li></p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Singletoy;