import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header= () => {
  const {user,logOut} = useContext(AuthContext) 
  const photo = user?.photoURL
    return (
    <div >
      <Container   fluid style={{background: "#08E0DD"}}>
      
       
          
            <Container className='flex justify-between text-center' >
              <div >
              <Navbar.Brand href="#home"><img style={{width:'145px',height:'65px'}} src="https://i.ibb.co/10gq6RC/figure.jpg" alt="" /></Navbar.Brand>
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              </div>
              
            
             
                  <div className='mt-6' >
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to='/home'>Home</Link>
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to='/blogs'>Blog</Link>
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to='/alltoys'>Alltoys</Link>
                  
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to="/mytoys">My Toys</Link>
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to="/addtoy">Add Toys</Link>
                  <Link  className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}}>{user?  <h6 onClick={()=>logOut()}  >
                  Logout
                  </h6> :  <Link className='mx-2' style={{color:'#335B5A',textDecoration:'none',fontWeight:'600'}} to='/login'>
                  Login
                  </Link>}</Link>
                  <Link to=''>{user  && <div className='size_of_img' >
                                        <img  src={photo} title={user?.displayName} id="t-4" style={{width:'30px',height:'30px',borderRadius:'50%'}} alt="" />
                                    </div>}</Link>
                  </div>
                
              
             </Container>
           
          
     
  </Container>
    </div>
  );
};

export default Header;