import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config.js';
import { FaGoogle , FaGithub } from "react-icons/fa";

const Googlesignin = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();

    const handlegoogleSignin = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggedinUser = result.user;
            console.log(loggedinUser);
            setUser(loggedinUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

        const handleSignout = () => {
              signOut(auth)
            .then (result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
        }

        const handlegithubSignin = () => {
            signInWithPopup(auth, gitprovider)
            .then( result => {
                const loggInuser = result.user;
                console.log(loggInuser);
                setUser(loggInuser);
            })
            .catch(error => {
                console.log(error)
            })
        }
    
    return (
        <div className='mx-auto'>
       {
        user ?
        <button className="bg-teal-400 btn" onClick={handleSignout}>Sign out from google</button> :
           <div>
           <button className='me-5 "bg-teal-400 btn rounded-full' onClick={handlegoogleSignin}> <FaGoogle></FaGoogle></button>
            <button className='"bg-teal-400 btn rounded-full' onClick={handlegithubSignin}><FaGithub></FaGithub></button>
           </div>
       }

           {/* { user &&
            <div>
                <h1>{user.displayName}</h1>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
           } */}
        </div>
    );
};

export default Googlesignin;