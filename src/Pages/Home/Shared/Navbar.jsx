import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, username }) => {
    return (
        <div>
      <nav className="py-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Website Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold text-white">Website Name</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link  to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link  to="/toys" className="text-white hover:text-gray-200">All Toys</Link>
          {loggedIn && (
            <>
              <Link  to="/my-toys" className="text-white hover:text-gray-200">My Toys</Link>
              <Link  to="/add-toy" className="text-white hover:text-gray-200">Add A Toy</Link>
            </>
          )}
          <Link  to="/blogs" className="text-white hover:text-gray-200">Blogs</Link>
          {loggedIn ? (
            <div className="relative">
              <img src="/path/to/profile-picture.png" alt="Profile Picture" className="w-8 h-8 rounded-full cursor-pointer" />
              {username && (
                <span className="absolute bottom-0 px-2 py-1 text-xs text-gray-900 transform -translate-x-1/2 bg-white rounded left-1/2">
                  {username}
                </span>
              )}
            </div>
          ) : (
            <Link  to="/login" className="text-white hover:text-gray-200">Login</Link>
          )}
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;