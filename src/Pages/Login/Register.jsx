import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';



import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser}   = useContext(AuthContext);
   

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <Container className='mx-auto w-25 mb-14'>
        <form onSubmit={handleRegister} className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">And get 6 months free trial !!!!</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="mt-6 form-control">
          <button type='submit' className="bg-teal-400 btn">Register</button>
          <p>Already signed up? <Link to="/login"> <span className='text-2xl'>Login</span></Link> </p>
        
          
          
        </div>
      </div>
    </div>
  </div>
</form>
</Container>
    );
};

export default Register;