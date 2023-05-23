import React from 'react';
import Swal from 'sweetalert2';


const Addtoys = () => {

    const  handleAddtoy = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const name = form.name.value;
        const quantity = form.available_quantity.value;
        const productName = form.product_name.value;
        const sub = form.sub.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.img.value;
        const description = form.description.value;

        const newToy = {name, email, quantity , productName,sub, price ,rating,photo, description};
        console.log(newToy);

        
        fetch('http://localhost:5000/toy', {
           method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }



    return (
        <div>
            <p className='mt-4 font-mono text-3xl text-center text-teal-500 underline decoration-sky-500 hover:font-serif'>Add your own toy</p>

          <form onSubmit={handleAddtoy}>
          <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-teal-500 underline decoration-sky-500 hover:font-serif">Store Your toy information here</h1>
     
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"    name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product name</span>
          </label>
          <input type="text" name='product_name' placeholder="product name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <input type="text" name='sub' placeholder="Sub-category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="price in $" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input type="number" name='available_quantity' placeholder="Available quantity in $" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name='rating' placeholder="Rating" className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='img' placeholder="url" className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add Description</span>
          </label>
          <input type="text" name='description' placeholder="Tell us more" className="input input-bordered" />
        
        </div>
        <div className="mt-6 form-control">
          <button className="bg-teal-400 btn">Add product</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </form>
        </div>
    );
};

export default Addtoys;