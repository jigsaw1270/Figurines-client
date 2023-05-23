import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatetoys = () => {
    const loadedUser = useLoaderData();


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const quantity = form.available_quantity.value;
        const productName = form.product_name.value;
        const sub = form.sub.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.img.value;
        const description = form.description.value;

        const updatedToy = {name, email, quantity , productName,sub, price ,rating,photo, description};
        console.log(updatedToy);
        fetch(`http://localhost:5000/toy/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }
    return (
        <div>
            <h2 className='mt-4 font-mono text-3xl text-center text-teal-500 underline decoration-sky-500 hover:font-serif'>Update toys</h2>

            <form onSubmit={handleUpdate}>
          <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-teal-500 underline decoration-sky-500 hover:font-serif">Edit Your toy information here</h1>
     
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"    name='email' defaultValue={loadedUser?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={loadedUser?.name} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product name</span>
          </label>
          <input type="text" name='product_name' defaultValue={loadedUser?.productName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <input type="text" name='sub' defaultValue={loadedUser?.sub} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' defaultValue={loadedUser?.price} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input type="number" name='available_quantity' defaultValue={loadedUser?.available_quantity} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name='rating' defaultValue={loadedUser?.rating} className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='img' defaultValue={loadedUser?.photo} className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add Description</span>
          </label>
          <input type="text" name='description' defaultValue={loadedUser?.description} className="input input-bordered" />
        
        </div>
        <div className="mt-6 form-control">
          <button className="bg-teal-400 btn">Update</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </form>
        </div>
    );
};

export default Updatetoys;