import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoys = () => {
    const loadedUsers = useLoaderData();
    const [toys, setToys] = useState(loadedUsers);

    const handleDelete = _id =>{
        console.log( 'delete', _id);
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining = toys.filter(toy => toy._id !== _id);
                setToys(remaining); 
            }
        })
    }

    return (

       
            <div>
             <h2 className='mt-4 font-mono text-3xl text-center text-teal-500 underline decoration-sky-500 hover:font-serif'>Total toys added :{toys.length}</h2>

             {
                toys.map(toy => <div key={toy._id}>
                    <div className="shadow-xl card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={toy.photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title">{toy.name}</h2>
    <p>{toy.description}</p>
    <div className="card-actions">
      <Link to={`/update/${toy._id}`}><button className="bg-teal-400 btn">Update</button></Link>
      <button   onClick={ () => handleDelete(toy._id)} className="bg-teal-400 btn">Delete</button>
    </div>
  </div>
</div>
                </div>)
             }
            </div>
        );
    };
    

export default Mytoys;