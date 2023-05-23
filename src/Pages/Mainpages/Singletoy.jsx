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
          
          <div className="min-h-screen hero bg-gradient-to-r from-sky-500 to-indigo-500 ">
  <div className="hero-overlay bg-opacity-60"> 
  <div className="text-center mt-28 hero-content text-neutral-content">
    <div className="max-w-md">
    <img src={img} alt="" /></div>
      <h1 className="mb-5 text-5xl font-bold">{toy_name}</h1>
      <p className="mb-5"><li>Seller : {seller}</li>
      <li>{sub_category}</li>
      <li>Price: ${price}</li>      
      <li>Stock : {available_quantity} pieces</li>
      <li>Rating : {rating}</li>
      <li>Description : {description}</li></p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singletoy;